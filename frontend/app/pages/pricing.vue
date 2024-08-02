
<template>
  <PageHeader :pageheader="pageheader" />
  <div class="flex w-full columns-3 justify-center gap-10 content-between  m-5 ">
  <FeatureCard :ui="ui" :header='"Bronze"' :data="card1" />
  <FeatureCard :ui="ui" :header='"Silver"' :data="card2" />
  <FeatureCard :ui="ui" :header='"Gold"' :data="card3" />

  </div>

</template>
<script setup>
const pageheader = {
  number: "02",
  text: "Pricing"
}
const card1 = {
  body: {
    title: "",
    content: `Create your personal profile. Your personal link to profile. Share it via NFC or using a barcode.
     Get contacts to key in their own information. Keep track of your contacts who have shared information. 
     Manage contacts and message them using your favourite messaging applications. `,
    pricecurrency:"MYR",
    priceamount:"24.99",
    priceduration:"monthly",
  }
}

const card2 = {
  body: {
    title: "",
    content: `Includes basic. View Statistics of contacts shared. Display location shared on map. 
    Capture additional business information for contact like orgnization, business type and notes. Search on additional 
    criteria for finding contacts. Define status for contacts to track.`,
    pricecurrency:"MYR",
    priceamount:"36.99",
    priceduration:"monthly",
  }
}

const card3 = {
  body: {
    title: "",
    content: `Create an organization and assign staff with unique virtual cards. Admin can view staff 
    contact statistics. Users can add interactions with contacts for tracking. Setup followup reminders. 
    Create progression view and discover insight. Additional search for shared contacts among staff. `,
    pricecurrency:"MYR",
    priceamount:"47.99",
    priceduration:"monthly",
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
</script>