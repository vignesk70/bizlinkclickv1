<template>
    <div>
        <PageHeader :pageheader="pageheader" />
        <div class="px-12 bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-md">
                <!-- <img class="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow"> -->
                <UIcon name="i-heroicons-user-circle" class="flex mx-auto h-20 w-20 dark:bg-black" />

                <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                    Create a new account or Login via a profile below
                </h2>
                <!-- <p class="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
                    Or
                    <a href="/protected/register"
                        class="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                        login to your account
                    </a>
                </p> -->
                <div class="mt-4">
                    <!-- <p class="text-roboto mb-4 text-center">Login With </p> -->
                    <div class="flex space-x-4 mx-auto justify-center">
                        <div v-for="(provider, key) in providers" class="p-4 rounded-lg border mb-4 w-24">
                            <ULink :to="provider?.signinUrl">{{ provider?.name }}</ULink>
                        </div>
                    </div>
                </div>
            </div>

            <!-- <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form method="POST" action="#">
                        <div>

                            <div v-for="(value, key) in data2" class="flex flex-col columns-4 py-1">
                                <p class="text-sm text-slate-700 font-roboto">{{ labels[key] }}</p>
                                <USelectMenu searchable v-if="key === 'country'" v-model="entereddata[key]"
                                    :options="countrylist" placeholder="Select country" value-attribute="label" />
                                <UInput v-else :id="key" v-model="entereddata[key]" :placeholder="value"
                                    class="mb-2 w-72 font-roboto" :label="labels[key]"></UInput>

                            </div>

                        </div>
                        <div class="mt-6">
                            <span class="block w-full rounded-md shadow-sm">
                                <button type="submit"
                                    class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                    Create account
                                </button>
                            </span>
                        </div>
                    </form>

                </div>
            </div> -->
        </div>

    </div>
</template>
<script setup lang="ts">

import countrylist from '~/assets/countries.json'

const {
    status,
    data,
    lastRefreshedAt,
    getCsrfToken,
    getProviders,
    getSession,
    signIn,
    signOut
} = useAuth()

const providers = await getProviders()

const routes = useRouter()
if (status.value === 'authenticated') {
    console.log('already authenticated')
    routes.push('/protected/register')
}

const pageheader = {
    number: "04",
    text: "Register"
}

const entereddata = ref({
    fullName: '',
    organization: '',
    title: '',
    phone: '',
    email: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    website: '',
    username: '',
})
const data2 = ref({
    fullName: 'John Doe',
    organization: 'Company Inc.',
    title: 'Software Engineer',
    phone: '+1234567890',
    email: 'johndoe@example.com',
    streetAddress: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zipCode: '12345',
    country: 'USA',
    website: 'https://example.com',
    username: 'short username with no spaces',
})
const labels = ref({
    fullName: 'Full Name',
    organization: 'Company Name',
    title: 'Designation',
    phone: 'Phone no.',
    email: 'Email',
    streetAddress: 'Address ',
    city: 'City',
    state: 'State',
    zipCode: 'Postcode',
    country: 'Country',
    website: 'Website URL',
    username: 'Short User Name',
})



function generateVCard(data) {
    return `
BEGIN:VCARD
VERSION:3.0
FN:${data.fullName}
ORG:${data.organization}
TITLE:${data.title}
TEL;TYPE=WORK,VOICE:${data.phone}
EMAIL:${data.email}
ADR;TYPE=WORK,PREF:;;${data.streetAddress};${data.city};${data.state};${data.zipCode};${data.country}
URL:${data.website}
END:VCARD
  `.trim();
}

function downloadVCard(data) {
    const vCard = generateVCard(entereddata.value);
    console.log(entereddata.value.fullName)
    const blob = new Blob([vCard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${entereddata.value.fullName}.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


</script>