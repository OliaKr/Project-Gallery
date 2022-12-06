'use strict'

// $(document).ready(initPage)
function initPage() {
  renderProjects()
  rendelModal()
  
}

renderProjects()
function renderProjects() {
  var portfolioGrid = $('.portfolio-display')
  var projects = getProj()
  var strHtmls = ``

  strHtmls += projects.map(function (project) {
    return `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1${project.id}">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/portfolio/${project.id}.jpg">
        </a>
        <div class="portfolio-caption">
          <h4>${project.name}</h4>
          <p class="text-muted">${project.title}</p>
        </div>
      </div>
        
       `

  })
  portfolioGrid.html(strHtmls)

}


function rendelModal(projId) {
  var proj = getProjId(projId)
  console.log(proj);
  var strHtml = `
  <div class="modal-body">
  <!-- Project Details Go Here -->
  <h2>${proj.name}</h2>
  <p class="item-intro text-muted">${proj.title}</p>
  <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}.jpg" alt="">
  <p>${proj.desc}</p>
  <ul class="list-inline">
    <li>Date: ${proj.publishedAt}</li>
    <li>Client: Threads</li>
    <li>Category: ${proj.labels}/li>
  </ul>
  <button onclick="openUrl('${proj.id}')" class="btn btn-primary">Check it Out!</button>
  <button class="btn btn-primary" data-dismiss="modal" type="button">
      <i class="fa fa-times"></i>
      Close Project</button>
</div>
  
  
  `
  document.querySelector('modal-body').innerHTML = strHtml

}

function openUrl(url) {
  window.open(url, '_blank').focus()
}

function onGetEmailLink() {
  var userEmailInput = document.querySelector('[name="user-email"]').value
  var userSubInput = document.querySelector('[name="user-subject"]').value
  var userMsgInput = document.querySelector('[name="massage"]').value
  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${userEmailInput}.com&su=${userSubInput}&body=${userMsgInput}`)
  
}
