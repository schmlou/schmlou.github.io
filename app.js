// Footer profile links: edit these URLs
const LINKS = {
  linkedin: 'https://www.linkedin.com/in/louisschmalisch/',
  github: 'https://github.com/schmlou',
};
document.querySelectorAll('[data-link]').forEach((a) => { a.href = LINKS[a.dataset.link]; });

const PROJECTS = [
  {
    id: 'climate-resilient-bayreuth',
    title: 'Climate-resilient municipality of Bayreuth using the example of Sankt Georgen',
    summary: 'For our final project in the Bachelor’s program, we examined the climate resilience of two sub-areas within the Bayreuth city district.',
    description: [
      'For our final project in the Bachelor’s program, we examined the climate resilience of two sub-areas in Bayreuth, Germany. Our study focused on Sankt Georgen, where we compared a newly planned development area with established buildings.',
      'Using remote sensing data, climate data, and empirical methods, we assessed various climate resilience indicators, including heat island effects, green space distribution, and water management capabilities. Our findings revealed that the newly planned sub-area demonstrates significantly greater climate resilience than the older buildings in the long-established sub-area.',
      'The project combined multiple geospatial methods, including satellite imagery analysis, urban climate modeling, and spatial planning assessments. Our recommendations provide urban planners with actionable insights to enhance climate adaptation strategies in existing neighborhoods.',
    ],
    image: 'assets/Studienprojekt_St.Georgen_Lindner_Neynaber_Schmalisch_Duesselmann.jpg',
    venue: 'University of Bayreuth',
    year: 2024,
    authors: "<a href='https://www.linkedin.com/in/jela-d%C3%BCsselmann/' target='_blank' rel='noopener noreferrer'>Jela Düsselmann</a>, <a href='https://www.linkedin.com/in/sina-lindner-a0b435269/' target='_blank' rel='noopener noreferrer'>Sina Lindner</a>, Tim Neynaber, Louis Schmalisch",
    tags: ['climate resilience', 'urban planning', 'remote sensing'],
    language: 'German',
    pdf: 'assets/projects/Studienprojekt_St.Georgen_Lindner_Neynaber_Schmalisch_Duesselmann.pdf',
    demo: '',
  },
  {
    id: 'carto-geomedia-temp-anomalies',
    title: 'Cartographic Design and Geomedia: Visualizing Temperature Anomalies in European Countries',
    summary: 'For our class Cartographic Design and Geomedia we created a physical and digital map to visualize temperature anomalies due to climate change in different European countries.',
    description: [
      'We explored the visualization and analysis of temporal anomalies in climate datasets. Our study focused on the application of cartographic techniques to represent and interpret climate variations over time.',
      'Using geospatial data and geomedia tools, we developed interactive maps that highlight areas with significant temperature fluctuations. Our findings demonstrate the effectiveness of cartographic approaches in identifying and communicating complex climate patterns within Europe.',
      'The project combined traditional cartographic methods with modern geomedia technologies, providing a comprehensive framework for visualizing temporal climate data for educational purposes.',
    ],
    image: 'assets/climate_anomalies_header.png',
    venue: 'Paris Lodron University Salzburg',
    year: 2024,
    authors: "<a href='https://www.linkedin.com/in/markus-tomio-5a9b47270/' target='_blank' rel='noopener noreferrer'>Markus Tomio</a>, Niksa Borovac, Louis Schmalisch",
    tags: ['climate change', 'cartography', 'geomedia'],
    language: 'English',
    pdf: 'assets/projects/carto_geomedia_climate.pdf',
    demo: 'https://storymaps.arcgis.com/stories/c3ababb6ee09436ab1f0e24ef15d4316',
  },
  {
    id: 'adesso-geoai-internship',
    title: 'GIS Internship at adesso: Researching GeoAI',
    summary: 'In an eight-week internship at adesso’s Competence Centre GIS, I tested the GeoAI market and built a natural-language flood analyst as a proof of concept.',
    description: [
      'During my eight-week internship (6 July to 28 August 2026) in the Competence Centre GIS at adesso, an IT service provider with a strong consulting arm, I researched future opportunities around GeoAI. I worked on two loosely defined tasks around my own interests and worked on both alone, with my supervisor as a backup to tackle questions. I also joined all team meetings and the weekly sessions of adesso’s “AI-Force” and completed around 15 in-house e-learning certificates on topics like AI in software development, AI ethics, soft skills and introduction in different industries.',
      'Project 1: Testing the GeoAI market. I compared open-source GeoAI tools (QGIS plugins, MCP integrations, an LLM skill for coding agents and an AI-supported GIS), pairing nine tools with local models and the cloud model GPT-5-nano. Every tool received the same data (a Sentinel-2 scene and OSM roads of Karlsruhe) and five tasks of increasing difficulty, from loading layers and checking the CRS to running the whole workflow from a single prompt. Each run was scored on correctness, completion, time, manual interventions and usability, and only the actual GIS output counted. After 45 test runs, I summarised the results in a report of about 35 pages.',
      'Result: GeoAI already helps with simple, standardised tasks such as checking layers or creating buffers, while raster calculations and complete workflows often ended in crashes, long runtimes or manual rework. GPT-5-nano combined with QGIS MCP or the geosql skill performed best, and local models were not practical on a standard laptop (32GB RAM and 6GB VRAM). My recommendation was to use these tools as assistants in controlled pilot projects, always with a human checking the results.',
      'Project 2: A flood analyst you can talk to. Since LLMs wrote different calculation code every time they were asked the same question, I built a proof of concept (Multi-Agent-System) in which the LLM only understands the request and controls the workflow, while fixed Python scripts do the calculations. An orchestrator turns the user’s scenario into a structured configuration and runs specialised modules: terrain preparation on a 1 m elevation model, flood calculation, a building overlay with cadastral data, risk classification, validation and an HTML report with maps. If something is unclear or throws an error, the system asks the user instead of guessing. The report text only uses values that the workflow actually calculated.',
      'I then turned the pipeline into a web application: you click a point on the map and ask, for example, “What happens if the river rises by 4 metres?”. A small local model extracts the parameters, the analysis runs in a Docker container and danger zones, affected buildings and risk classes appear as map layers. It is a screening tool, not a hydrodynamic model, but it shows how natural language can make GIS analyses accessible. In my final week, I presented both projects and a development roadmap to the team.',
      'Technically, I learned how a software product grows from an idea into a working prototype, from architecture to backend, frontend and containerisation and built a solid understanding of AI-driven workflows and their limits. I drew on my MSc AGI studies throughout, from the Software Development course, the OpenGIS course and Spatial Analysis and strengthened my soft skills in self-planned, goal-oriented work and in presenting my results to a team.',
    ],
    image: '',
    venue: 'adesso',
    year: 2026,
    authors: 'Louis Schmalisch',
    tags: ['GeoAI', 'LLM agents', 'MCP', 'flood analysis', 'Python', 'Docker'],
    language: 'English',
    pdf: '',
    demo: '',
  },
];

const SEMESTERS = [
  {
    term: 'WS 2025/26',
    courses: [
      ['Orientation, Career Development & ePortfolio'],
      ['Scientific Methods and Writing'],
      ['Geographic Information Science and Technology'],
      ['Cartographic Design & Geomedia', 'carto-geomedia-temp-anomalies'],
      ['Methods in Spatial Analysis'],
      ['Software Development'],
      ['Design of Geospatial Data Models and Services'],
      ['OpenGIS: Standards, Architectures & Services'],
    ],
  },
];

const CERTIFICATES = [
  { year: '2023', issuer: 'University of Bayreuth', name: 'Bauleitplanung 1' },
];

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const entry = (when, what, where) =>
  `<div class="entry"><div class="when">${esc(when)}</div><div class="what">${esc(what)}</div><div class="where">${esc(where)}</div></div>`;

const cvItem = (when, what, where) =>
  `<div class="cv-item"><span class="when">${esc(when)}</span><span class="info"><span class="what">${esc(what)}</span><span class="where">${esc(where)}</span></span></div>`;

const views = {
  about: () => `
    <section class="hero">
      <div class="hero-text">
        <div class="kicker">M.Sc. student · Applied Geoinformatics</div>
        <h1>Louis Schmalisch</h1>
        <p>I’m a Master’s student in <a href="https://www.plus.ac.at/geoinformatik/education/agi/?lang=en" target="_blank" rel="noopener">Applied Geoinformatics</a> at the Paris Lodron University of Salzburg (Z_GIS). I completed my B.Sc. in Geography with a focus on human geography at the University of Bayreuth, where I discovered my interest in the geospatial domain.</p>
        <div class="actions">
          <a class="btn" href="#/projects">View projects</a>
          <a class="btn outline" href="#/cv">Curriculum vitae</a>
        </div>
      </div>
      <img class="portrait" src="assets/profile-photo.jpg" alt="Louis Schmalisch">
    </section>
    <section class="row">
      <h2 class="label">Focus areas</h2>
      <div class="body focus">
        <div><h3>Environmental monitoring</h3><p>Satellite imagery and drone technology, remote sensing for environmental and urban challenges.</p></div>
        <div><h3>Spatial analysis</h3><p>Network and spatial analysis, climate change adaptation and mitigation, machine learning for geospatial data.</p></div>
        <div><h3>GIS development</h3><p>Working student at Asseco BERIT on WebGIS, data models and thematic layers in the in-house GIS “SAMO &amp; LIDS”.</p></div>
      </div>
    </section>
    <section class="row">
      <h2 class="label">Beyond academia</h2>
      <div class="body"><p class="plain">When I’m not exploring the world through data, I enjoy exploring it in real life. Hiking, skiing, or running — sprinkle in some climbing or football, and I’m happy :)</p></div>
    </section>
    <section class="selected">
      <div class="selected-head"><h2 class="label">Selected projects</h2><a href="#/projects">All projects</a></div>
      <div class="cards">
        ${PROJECTS.map((p) => `
          <a class="card" href="#/project/${p.id}">
            ${p.image ? `<img src="${p.image}" alt="" loading="lazy">` : ''}
            <div class="kicker">${esc(p.venue)} · ${p.year}</div>
            <div class="title">${esc(p.title)}</div>
          </a>`).join('')}
      </div>
    </section>`,

  projects: () => `
    <section class="page-head">
      <h1>Projects</h1>
      <p>Project work from my Bachelor’s and Master’s studies.</p>
    </section>
    <section class="list">
      ${PROJECTS.map((p) => `
        <a class="item" href="#/project/${p.id}">
          ${p.image ? `<img src="${p.image}" alt="" loading="lazy">` : ''}
          <div class="text">
            <div class="kicker">${esc(p.venue)} · ${p.year}</div>
            <div class="title">${esc(p.title)}</div>
            <div class="summary">${esc(p.summary)}</div>
            <div class="tools">${esc(p.tags.join(' · '))}</div>
          </div>
        </a>`).join('')}
    </section>`,

  detail: (id) => {
    const d = PROJECTS.find((p) => p.id === id);
    if (!d) return views.projects();
    return `
    <section class="detail">
      <a class="back" href="#/projects">← All projects</a>
      <div class="kicker">${esc(d.venue)} · ${d.year}</div>
      <h1>${esc(d.title)}</h1>
      ${d.image ? `<img class="figure" src="${d.image}" alt="${esc(d.title)}">` : ''}
      <div class="detail-cols">
        <div class="detail-main">
          <div>
            <h2 class="label">About the project</h2>
            ${d.description.map((t, i) => `<p class="${i === 0 ? 'question' : 'text'}">${esc(t)}</p>`).join('')}
          </div>
        </div>
        <aside class="detail-side">
          <div class="facts">
            <div class="label">AUTHORS</div><div class="val">${d.authors}</div>
            <div class="label">TOPICS</div><div class="val">${esc(d.tags.join(', '))}</div>
            <div class="label">LANGUAGE</div><div class="val">${esc(d.language)}</div>
          </div>
          ${d.demo ? `<a class="download" href="${d.demo}" target="_blank" rel="noopener"><span>View story map</span><span>WEB</span></a>` : ''}
          ${d.pdf ? `<a class="download" href="${d.pdf}" download><span>Download report</span><span>PDF</span></a>` : ''}
        </aside>
      </div>
    </section>`;
  },

  courses: () => `
    <section class="page-head">
      <h1>Courses</h1>
      <p>Modules completed in the M.Sc. Applied Geoinformatics, by semester. Modules with a project link to the full write-up.</p>
    </section>
    ${SEMESTERS.map((sem) => `
      <section class="row">
        <h2 class="label">${esc(sem.term)}</h2>
        <div class="body course-list">
          ${sem.courses.map(([name, projectId]) => `
            <div class="course">
              <span class="name">${esc(name)}</span>
              <span class="link">${projectId ? `<a href="#/project/${projectId}">View project</a>` : ''}</span>
            </div>`).join('')}
        </div>
      </section>`).join('')}
    <section class="row last">
      <h2 class="label">Certificates</h2>
      <div class="body certs">
        ${CERTIFICATES.map((c) => `
          <div class="cert">
            <div class="kicker">${esc(c.year)} · ${esc(c.issuer)}</div>
            <div class="name">${esc(c.name)}</div>
          </div>`).join('')}
      </div>
    </section>`,

  cv: () => `
    <section class="cv-head">
      <h1>Curriculum vitae</h1>
      <a class="btn" href="assets/Louis_Schmalisch_CV.pdf" download="Louis_Schmalisch_CV.pdf">Download CV (PDF)</a>
    </section>
    <section class="row">
      <h2 class="label">Education</h2>
      <div class="body cv-list">
        ${cvItem('Oct. 2025 – present', 'M.Sc. Applied Geoinformatics', 'Paris Lodron University Salzburg, Z_GIS, Austria')}
        ${cvItem('Oct. 2021 – Sept. 2025', 'B.Sc. Geography: Society and Environment', 'University of Bayreuth, Germany · Thesis: Geopolitics of global Infrastructure')}
      </div>
    </section>
    <section class="row">
      <h2 class="label">Experience</h2>
      <div class="body cv-list">
        ${cvItem('6 July – 28 Aug. 2026', 'GIS Intern', 'adesso, Competence Centre GIS · GeoAI market research and a natural-language flood analysis prototype · QGIS, MCP, LLMs, Python, Docker')}
        ${cvItem('Jan. 2022 – present', 'Working Student', 'Asseco BERIT GmbH, Mannheim · Data models, thematic layers and web GIS applications · Java, XML, DBeaver, Oracle, SAMO/LIDS')}
      </div>
    </section>
    <section class="row">
      <h2 class="label">Volunteer &amp; training</h2>
      <div class="body cv-list">
        ${cvItem('2016 – 2020', 'Youth Football Coach', 'DJK Feudenheim')}
        ${cvItem('2023', 'Bauleitplanung 1', 'University of Bayreuth')}
      </div>
    </section>
    <section class="row last">
      <h2 class="label">Skills</h2>
      <div class="body skills">
        <div><div class="kicker">GIS</div><div>QGIS, ArcGIS</div></div>
        <div><div class="kicker">PROGRAMMING</div><div>Python, Java</div></div>
        <div><div class="kicker">DATA FORMATS</div><div>XML, JSON</div></div>
        <div><div class="kicker">OTHER TOOLS</div><div>Microsoft Suite, Atlassian Suite, DBeaver (Oracle)</div></div>
      </div>
    </section>`,
};

function render() {
  const parts = location.hash.replace(/^#\/?/, '').split('/');
  const route = parts[0] || 'about';
  const main = document.getElementById('main');
  let page = route;
  if (route === 'project') {
    main.innerHTML = views.detail(parts[1]);
    page = 'projects';
  } else {
    page = views[route] && route !== 'detail' ? route : 'about';
    main.innerHTML = views[page]();
  }
  document.querySelectorAll('#nav a').forEach((a) => a.classList.toggle('active', a.dataset.page === page));
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', render);
render();
