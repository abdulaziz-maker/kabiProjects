const jobContainer = document.querySelector("#job-container");

let job = [
  {
    id: 496,
    title: "Job Details",
    postedOn: "29 June, 2026 11:52 AM",
    postedBy: "Admin Admin Admin",
    admin: "noor org",
    expiresOn: "12 July, 2026",
    visible: "No",
    recruiter: "Samer Jobanrec",
    vacancies: 10,
    closed: 0,
    views: 0,
    ratio: "0%",
    application: 0,
    daysOpen: 1,
  },

  {
    id: 489,
    title: "Job Details",
    postedOn: "28 June, 2026 04:32 PM",
    postedBy: "Admin Admin Admin",
    admin: "noor org",
    expiresOn: "12 July, 2026",
    visible: "No",
    recruiter: "Samer Jobanrec",
    lastStage: "Reviewed",
    vacancies: 5,
    closed: 1,
    views: 20,
    ratio: "40%",
    application: 2,
    daysOpen: 2,
  },
];

function jobCard() {
  jobContainer.innerHTML = " ";

  job.forEach(function (job) {
    jobContainer.innerHTML += `
      <article class="job-card">
        <header class="job-header">
          <div class="job-title">
            <span>#${job.id}</span>
            <h2>${job.title}</h2>
          </div>

          <div class="job-action">
            <p>Published: <strong class="status-active">Active</strong></p>
            ${job.lastStage ? `<p>Last Stage: <strong class="status-stage">${job.lastStage}</strong></p>` : ""}

            <div class="job-icons">
            <button type="button" class="job-icon-btn" onclick="pinJob(${job.id})">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4" /><path d="M9 15l-4.5 4.5" /><path d="M14.5 4l5.5 5.5" /></svg>
            </button>

            <button type="button" class="job-icon-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -14" /><path d="M9 7l6 0" /><path d="M9 11l6 0" /><path d="M9 15l4 0" /></svg>
            </button>

            <button type="button" class="job-icon-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 14l4 -4l-4 -4" /><path d="M19 10h-11a4 4 0 1 0 0 8h1" /></svg>
            </button>

            <button type="button" class="job-icon-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" /><path d="M11 13l9 -9" /><path d="M15 4h5v5" /></svg>
            </button>

            <button type="button" class="job-icon-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M22 13.478v4.522a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-4.522l.553 .277a20.999 20.999 0 0 0 18.897 -.002l.55 -.275zm-8 -11.478a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447 .724a19.002 19.002 0 0 1 -16.726 .186l-.647 -.32l-1.18 -.59v-2.242a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3h4zm-2 8a1 1 0 0 0 -1 1a1 1 0 1 0 2 .01c0 -.562 -.448 -1.01 -1 -1.01zm2 -6h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1z" /></svg>
            </button>

            <button type="button" class="job-icon-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" /><path d="M12 17v-6" /><path d="M9.5 14.5l2.5 2.5l2.5 -2.5" /></svg>
            </button>

            <button type="button" class="job-icon-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg>
            </button>

            <button type="button" class="job-icon-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9.58 5.548c.24 -.11 .492 -.207 .752 -.286c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 .957 -.383 1.824 -1.003 2.454m-2.997 1.033h-11.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.13 -.582 .37 -1.128 .7 -1.62" /><path d="M3 3l18 18" /></svg>
            </button>

            <button type="button" class="job-icon-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 12l6 0" /></svg>
            </button>

            <button type="button" class="job-icon-btn" onclick="deleteJob()">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
            </button>

            <button type="button" class="job-icon-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /></svg>
            </button>
            </div>
          </div>
        </header>

        <section class="main-card">
          <article class="job-info">
            <p>Posted on ${job.postedOn}</p>

            <span>
              By
              <strong class="admin">${job.postedBy}</strong>
            </span>

            <p>Relates to</p>
            <p>${job.admin}</p>

            <p>Expires on ${job.expiresOn}</p>

            <p>
              Visible To Jobseeker:
              <strong class="value-dark">${job.visible}</strong>
            </p>

            <hr class="info-divider" />

            <p class="recruiters-label">Recruiters</p>
            <span class="admin recruiter">${job.recruiter}</span>
          </article>

          <article class="job-inside">
            <div class="vacancies-stats">
              <h3>Vacancies Stats</h3>

              <div class="job-details">
                <p>${job.vacancies}</p>
                <p>No. Of Vacancies</p>
              </div>

              <div class="job-details">
                <p>${job.closed}</p>
                <p>Closed Vacancies</p>
              </div>
            </div>

            <div class="job-status">
              <h3>Jobs Stats</h3>

              <section class="right-info">
                <div class="job-details">
                  <p>${job.views}</p>
                  <p>No. Of Views</p>
                </div>

                <div class="job-details">
                  <p>${job.application}</p>
                  <p>No. Of Applications</p>
                </div>

                <div class="job-details">
                  <p>${job.ratio}</p>
                  <p>Application Ratio</p>
                </div>

                <div class="job-details">
                  <p>${job.daysOpen}</p>
                  <p>No. Of Days Open</p>
                </div>
              </section>
            </div>
          </article>
        </section>
      </article>
    `;
  });
}

function pinJob(id) {
  for (let i = 0; i < job.length; i++) {
    if (job[i].id === id) {
      let pinJob = job[i];
      job.splice(i, 1);
      job.unshift(pinJob);
    }
  }

  jobCard();
}

function deleteJob() {
  job.pop();
  jobCard();
  alert("you Delete a job!");
}
let nextId = 497;

function addJob() {
  const newJob = {
    id: nextId++,
    title: "New Job",
    postedOn: "2 July, 2026 11:00 AM",
    postedBy: "Admin",
    admin: "KABI",
    expiresOn: "20 July, 2026",
    visible: "Yes",
    recruiter: "Abdulaziz",
    vacancies: 3,
    closed: 0,
    views: 0,
    ratio: "0%",
    application: 0,
    daysOpen: 1,
  };

  job.push(newJob);
  jobCard();
  alert("you add new job");
}

jobCard();
