<template>
  <div>
   <PageHeader :pageheader="pageheader" />
  </div>
</template>

<script setup>
// import { useGeolocation } from '@vueuse/core'
// const locs = ref([])
// const { coords, locatedAt, error, resume, pause } = useGeolocation()

const pageheader = {
  number:"03",
  text:"About Us"
}

// watch (coords, () => {
//   console.log("time",coords.value)
//   locs.value.push(coords.value)
// })

// const entereddata = ref({
//         fullName: '',
//         organization: '',
//         title: '',
//         phone: '',
//         email: '',
//         streetAddress: '',
//         city: '',
//         state: '',
//         zipCode: '',
//         country: '',
//         website: ''})
// const data2 = ref( {
//         fullName: 'John Doe',
//         organization: 'Company Inc.',
//         title: 'Software Engineer',
//         phone: '+1234567890',
//         email: 'johndoe@example.com',
//         streetAddress: '123 Main St',
//         city: 'Anytown',
//         state: 'CA',
//         zipCode: '12345',
//         country: 'USA',
//         website: 'https://example.com'
//       })


// function generateVCard(data) {
//   return `
// BEGIN:VCARD
// VERSION:3.0
// FN:${data.fullName}
// ORG:${data.organization}
// TITLE:${data.title}
// TEL;TYPE=WORK,VOICE:${data.phone}
// EMAIL:${data.email}
// ADR;TYPE=WORK,PREF:;;${data.streetAddress};${data.city};${data.state};${data.zipCode};${data.country}
// URL:${data.website}
// END:VCARD
//   `.trim();
// }

// function downloadVCard(data) {
//   const vCard = generateVCard(entereddata.value);
//   console.log(entereddata.value.fullName)
//   const blob = new Blob([vCard], { type: 'text/vcard' });
//   const url = window.URL.createObjectURL(blob);
//   const link = document.createElement('a');
//   link.href = url;
//   link.download = `${entereddata.value.fullName}.vcf`;
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// }



</script>