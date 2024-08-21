<template>
  <div> 
    <PageHeader :pageheader="pageheader" />
    <div class="flex w-full justify-center flex-wrap md:flex-none content-between ">
       
            <!-- cards to here -->
            <FeatureCard :ui="ui" :header='"NFC"' :data="card1"/>
            <FeatureCard :ui="ui4" :header='"QR Code"' :data="card10"/>
            <FeatureCard :ui="ui2" :header='"SaaS Platform"' :data="card2"/>
            <FeatureCard :ui="ui3" :header='"Enterprise Features"' :data="card3"/>
            

    </div>
    <div class="bg-gray-200 h-96"> </div>
  </div>
</template>
<script  setup>
    const card1 = {
        body:{
            title:"NFC Cards",
            content:"Use NFC Cards to reduce paper wastage and encourage reusability. Eco-friendly \
            alternative to paper business cards that usually are discarded.\
            Single card can be reused for multiple purposes. "
        }
    }
    const card2 = {
        body:{
            title:"Software as a Service",
            content:"Comprehensive platform to track who and where contacts were shared.\
            Includes editing and WhatsApp messaging."
        }
    }
    const card3 = {
        body:{
            title:"Enterprise Contact Management",
            content:"Track shared contact by individuals and locations. Develop pipeline and manage\
            interactions with the contact"
        }
    }
    const card10 = {
        body:{
            title:"Online Profile",
            content:"Maintain an online presence with a beautiful custom profile that showcases your details and\
            a share contact option to connect with you online. "
        }
    }

    const ui = {
  "base": "w-56 overflow-hidden",
  "body": {
    "base": "",
    "background": "",
    "padding": "px-4 py-5 sm:p-6"
  },
  "header": {
    "base": "font-bold text-center",
    "background": "bg-lime-500",

  },
  "footer": {
    "base": "",
    "background": "",
    "padding": "px-4 py-4 sm:px-6"
  }
}
const ui2 = {
    "base": "w-56 overflow-hidden",
  "body": {
    "base": "",
    "background": "",
    "padding": "px-4 py-5 sm:p-6"
  },
  "header": {
    "base": "font-bold text-center",
    "background": "bg-yellow-400",
    "padding": "px-4 py-5 sm:px-6"
  },
  "footer": {
    "base": "",
    "background": "",
    "padding": "px-4 py-4 sm:px-6"
  }
}
const ui3 = {
    "base": "w-56 overflow-hidden",
    "header": {
    "base": "font-bold text-center",
    "background": "bg-cool-300",
    "padding": "px-4 py-5 sm:px-6"
  },
}
const ui4 = {
    "base": "w-56 overflow-hidden",
    "header": {
    "base": "font-bold text-center",
    "background": "bg-cyan-400",
    "padding": "px-4 py-5 sm:px-6"
  },
}
const pageheader = {
  number:"01",
  text:"Features"
}
</script>
