const twitterButtonOfAva = document.getElementsByClassName("twitter");
const instagramButtonOfAva = document.getElementsByClassName("instagram");
const facebookButtonOfAva = document.getElementsByClassName("facebook");
const tiktokButtonOfAva = document.getElementsByClassName("tiktok");
const twitterButtonOfOfficial = document.getElementsByClassName("twitter_official");

const toFormText = document.getElementById("to_form_text");

function jumpTwitterOfAva() {
    location.href = 'https://twitter.com/AvaMax';
}

function jumpInstagramOfAva() {
    location.href = 'https://www.instagram.com/avamax/';
}

function jumpFacebookOfAva() {
    location.href = 'https://www.facebook.com/AvaMax';
}

function jumpTiktokOfAva() {
    location.href = 'https://www.tiktok.com/@avamax';
}

function jumpTwitterOfOfficial(){
    location.href = 'https://twitter.com/AvaMax_JP';
}

function jumpToHome(){
    location.href ='index.html';
}

function jumpToInfo(){
    alert("現在制作中です！");
}

function jumpToReport(){
    location.href = 'report.html';
}

function jumpToReportSite(){
    location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfxxUKaf7mwDoD8uPg65dXFSvIsLE626M_6KY9NvdCb9cB4VA/viewform?usp=sf_link';
}