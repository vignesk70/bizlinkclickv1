<template>
  
    <PageHeader :pageheader="pageheader" />
    <div class="flex w-full columns-1 justify-center gap-10 content-between  m-5 ">
       
            <!-- cards to here -->
            <FeatureCard :ui="ui" :header='"NFC"' :data="card1"/>
            <FeatureCard :ui="ui2" :header='"SaaS Platform"' :data="card2"/>
            <FeatureCard :ui="ui3" :header='"Enterprise Features"' :data="card3"/>
            

    </div>
    <div class="bg-gray-200 h-96"> </div>
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
    const ui = {
  "base": "w-56 overflow-hidden",
  "body": {
    "base": "",
    "background": "",
    "padding": "px-4 py-5 sm:p-6"
  },
  "header": {
    "base": "font-bold text-center",
    "background": "bg-orange-300",

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
    "background": "bg-cool-400",
    "padding": "px-4 py-5 sm:px-6"
  },
}
const pageheader = {
  number:"01",
  text:"Features"
}
</script>
