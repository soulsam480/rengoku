<script setup lang="ts">
import { myGithub, projects } from '../constants';
</script>

<template>
  <section>
    <br />
    <div narrow class="resume">
      <div class="res-head">
        <h1>Sambit Sahoo</h1>
        <small class="muted">Full Stack Developer</small> <br />
        <small class="muted"
          ><a href="mailto:sambitsahoojs@gmail.com"
            >sambitsahoojs@gmail.com</a
          ></small
        ><br />
        <p>
          <a
            href="https://github.com/soulsam480"
            target="_blank"
            class="nav-link"
          >
            <small>github</small>
          </a>
          <a
            href="https://www.linkedin.com/in/sambit-sahoo-6a3859190/"
            target="_blank"
            class="nav-link"
          >
            <small>likedIn</small>
          </a>
          <a
            href="https://twitter.com/sambitsahoojs"
            target="_blank"
            class="nav-link"
          >
            <small>twitter</small>
          </a>
          <a
            href="https://instagram.com/sambitsahoojs"
            target="_blank"
            class="nav-link"
          >
            <small>instagram</small>
          </a>
        </p>
      </div>
      <br />
      <div class="res-container">
        <p class="res-head-2"><span>About</span></p>
        <div class="res-data">
          <p>
            Hello, I'm Sambit Sahoo, a Frontend Developer working at Evidev LLP.
            I'm passionate about coding as I love materailizing an Idea to a
            smooth user interface.
          </p>
          <p>
            Most of my work is open-source and I belive in the idea of community
            built software. I feel that participating in open-source gives us an
            opprtunity to gain more knowledge. When I'm not coding I mostly take
            photos or write articles. I'm an otaku at heart and One Piece is my
            favourite anime.
          </p>
        </div>
      </div>
      <div class="res-container">
        <p class="res-head-2"><span>Work Experience</span></p>
        <div class="res-data row">
          <div class="col-6">
            <p>
              <span>Evidev LLP</span>
              <small class="muted"><em> &nbsp;Frontend Developer</em></small>
              <br />
              <small class="muted">DEC 2020 - PRESENT</small>
              <a href="http://evidev.tech/" target="_blank" class="nav-link">
                <small>site</small>
              </a>
            </p>

            <small>
              <ul>
                <li>
                  Working on a FinTech product for client
                  <b>Evident Limited </b>(DEC 2020 - present)
                </li>
                <li>
                  Working on a Trading marketplace for client
                  <b>Hunter Technology Corp.</b> (MAY 2021 - present)
                </li>
              </ul>
            </small>
          </div>
          <div class="col-6">
            <p>
              <span>Tiaamo.com</span>
              <small class="muted"><em> &nbsp;Co-Founder</em></small> <br />
              <small class="muted">MARCH 2018 - PRESENT</small>
              <a
                href="https://noter.sambitsahoo.com"
                target="_blank"
                class="nav-link"
              >
                <small>site</small>
              </a>
            </p>

            <small>
              Clothing Startup primarily operating in the wholesale domain.
              Served over 50+ regular clients from various institutes and
              Industries.
            </small>
          </div>
        </div>
        <div class="res-data row">
          <div class="col-6">
            <p>
              <span>Public Incubator Inc.</span>
              <small class="muted"><em> &nbsp;Frontend Intern</em></small>
              <br />
              <small class="muted">MARCH 2020 - APRIL 2020</small>
              <a
                href="https://www.publicincubator.com/"
                target="_blank"
                class="nav-link"
              >
                <small>site</small>
              </a>
            </p>

            <small>
              Primarily worked on the Landing Page of the company.
            </small>
          </div>
        </div>
      </div>
      <div class="res-container">
        <p class="res-head-2"><span>Stack</span></p>
        <div class="res-data">
          <p><b>Frontend : </b> Vuejs, Reactjs, Electron</p>
          <p>
            <b>Frontend Frameworks/ Liabraries : </b> Quasar, Ionic-vue,
            Bootstrap, TailwindCSS
          </p>
          <p><b>Backend : </b> Nodejs, PostgreSQL, Sqlite3</p>
          <p><b>DevOps : </b> Firebase</p>
          <p>
            <b>Languages : </b> Typescript, Javascript, Python, Golang
            (learning)
          </p>
          <p><b>TEsting : </b> Cypress, Jest</p>
          <p><b>Graphics : </b> Adobe Photoshop, Adobe Illustrator</p>
        </div>
      </div>
      <div class="res-container">
        <p class="res-head-2"><span>Projects</span></p>
        <div class="res-data row">
          <div
            class="col-6"
            v-for="project in projects.slice(0, 4)"
            :key="project.title"
          >
            <p>
              <span> {{ project.title }} </span>
              <template v-for="link in project.links" :key="link.url">
                <a
                  v-if="link.label !== 'github'"
                  :href="link.url"
                  target="_blank"
                  class="nav-link"
                  ><small> {{ link.label }} </small>
                </a>
                <a
                  v-else
                  :href="myGithub + link.url"
                  target="_blank"
                  class="nav-link"
                  ><small> {{ link.label }} </small>
                </a>
              </template>
            </p>

            <small>
              {{ project.desc }}
            </small>
            <br />
            <small v-if="project.stack.length">
              <b> stack: </b> {{ project.stack.join(', ') }}
            </small>
          </div>
        </div>
        <br />
        <a href="/projects">more projects..</a>
      </div>
      <div class="res-container">
        <p class="res-head-2"><span>Education</span></p>
        <div class="res-data">
          <p>
            Indira Gandhi Institute of Technology, Sarang -
            <small class="muted"><em>B.Tech Mechanical Engineering</em></small>
            <br />
            <small class="muted">2017 - Present</small> <br />
            <small>Expected Graduation June 2021, CGPA - 8.12/10 </small>
          </p>
          <p>
            Naidu +2 Science College, Bhubaneswar -
            <small class="muted"><em>XII (Senior Secondary)</em></small> <br />
            <small class="muted">2015 - 2017</small> <br />
            <small
              >Council of Higher Secondary Education Odisha, Percentage-
              73.4%</small
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
.resume {
  h1 {
    margin-bottom: 5px;
  }
  p {
    font-size: 1em;
  }
  .muted {
    color: mix(black, white, 50%);
    a {
      color: mix(black, white, 50%);
      box-shadow: none;
      transition: none;
      border-bottom: 1px mix(black, white, 50%) dashed;
    }
  }
  .res-head {
    p {
      margin: 4px 0;
      a {
        padding: 0 3px;
      }
    }
  }
  .res-head-2 {
    span {
      color: white;
      padding: 0px 10px 0 5px;
      background-color: mix(black, white, 70%);
    }
  }
  .res-container {
    padding: 10px 0;
  }
  .res-data {
    padding-left: 20px;
  }
  .row {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  .col-6 {
    p {
      margin-bottom: 3px;
      span {
        border-bottom: 1px black dashed;
      }
      a {
        padding: 0 8px;
      }
    }
  }
}
</style>
