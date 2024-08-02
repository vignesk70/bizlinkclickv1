
<template>
  <PageHeader :pageheader="pageheader" />
  <div class="flex w-full columns-3 justify-center gap-10 content-between  m-5 ">
  <FeatureCard :ui="ui" :header='"NFC"' :data="card1" />
  </div>
</template>
<script setup>
const pageheader = {
  number: "02",
  text: "Pricing"
}
const card1 = {
  body: {
    title: "Basic",
    content: "Register as a personal user and generate your own profile page. Share your cards using NFC or using a barcode. Keep track of your shared\
    contacts. Contacts can add details that will be shared with you. Manage contacts and message them using your favourite messaging applications. "
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