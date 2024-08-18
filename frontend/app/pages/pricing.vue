<template>
  <div>
  <PageHeader :pageheader="pageheader" />
  <div class="flex w-full columns-2 justify-center content-between flex-wrap md:flex-none  ">
    <FeatureCard :ui="ui" :header='"Bronze"' :data="card1" />
    <FeatureCard :ui="ui2" :header='"Silver"' :data="card2" />
    <FeatureCard :ui="ui3" :header='"Gold"' :data="card3" />
  </div>
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
    content: `Create your personal profile with a unique link. Share it via NFC or using a barcode.
     Get contacts to key in their own information. Keep track of your contacts who have shared information. 
     Manage contacts and message them using your favourite messaging applications. `,
    pricecurrency: "MYR",
    priceamount: "24.99",
    priceduration: "monthly",
  }
}

const card2 = {
  body: {
    title: "",
    content: `Includes basic. View Statistics of contacts shared. Display location shared on map. 
    Capture additional business information for contact like orgnization, business type and notes. Search on additional 
    criteria for finding contacts. Define status for contacts to track.`,
    pricecurrency: "MYR",
    priceamount: "36.99",
    priceduration: "monthly",
  }
}

const card3 = {
  body: {
    title: "",
    content: `Create an organization and assign admins to manage individual staff profiles. Admin can view staff 
    contact statistics. Users can add interactions with contacts for tracking. Setup followup reminders. 
    Create progression view and discover insight.`,
    pricecurrency: "MYR",
    priceamount: "47.99",
    priceduration: "monthly",
  }
}

const ui = {
  "base": "w-64 overflow-hidden",
  "body": {
    "base": "",
    "background": "",
    "padding": "px-4 py-5 sm:p-6"
  },
  "header": {
    "base": "font-bold text-center",
    "background": "bg-yellow-600",

  },
  "footer": {
    "base": "",
    "background": "",
    "padding": "px-4 py-4 sm:px-6"
  }
}
const ui2 = {
  "base": "w-64 overflow-hidden",
  "body": {
    "base": "",
    "background": "",
    "padding": "px-4 py-5 sm:p-6"
  },
  "header": {
    "base": "font-bold text-center",
    "background": "bg-zinc-300",

  },
  "footer": {
    "base": "",
    "background": "",
    "padding": "px-4 py-4 sm:px-6"
  }
}
const ui3 = {
  "base": "w-64 overflow-hidden",
  "body": {
    "base": "",
    "background": "",
    "padding": "px-4 py-5 sm:p-6"
  },
  "header": {
    "base": "font-bold text-center",
    "background": "bg-yellow-300",

  },
  "footer": {
    "base": "",
    "background": "",
    "padding": "px-4 py-4 sm:px-6"
  }
}
</script>