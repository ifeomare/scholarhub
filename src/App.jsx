import "./App.css";
import Scholarship from "./components/scholarship.jsx";
import Navbar from "./components/navbar.jsx";

function App() {
  const scholarships = [
    {
      _id: {
        timestamp: 1763084584,
        date: "2025-11-14T01:43:04.000+00:00",
      },
      name: "Andrea Tilbian Halejian Memorial Fund",
      organization: "Northern New Jersey Community Foundation",
      start_date: null,
      end_date: null,
      results: null,
      payouts: null,
      website:
        "https://www.nnjcf.org/cause-posts/andrea-tilbian-halejian-memorial-fund/",
      id: 16,
    },
    {
      _id: {
        timestamp: 1763084584,
        date: "2025-11-14T01:43:04.000+00:00",
      },
      name: "Mary Elliot Wislar Memorial Scholarship",
      organization: "Princeton Area Community Foundation",
      start_date: "2026-01-31",
      end_date: "2026-04-15",
      results: "2026-05-31",
      payouts: "2026-07-31",
      website:
        "https://pacf.org/grants-scholarships/scholarships/scholarships-for-students/#56db807e5c3d6245d",
      id: 6,
    },
    {
      _id: {
        timestamp: 1763084584,
        date: "2025-11-14T01:43:04.000+00:00",
      },
      name: "Paul Coopersmith in Memory of Frank Delorenzo Memorial Fund",
      organization: "Northern New Jersey Community Foundation",
      start_date: null,
      end_date: null,
      results: null,
      payouts: null,
      website:
        "https://www.nnjcf.org/cause-posts/paul-coopersmith-in-memory-of-frank-delorenzo-memorial-fund/",
      id: 12,
    },
    {
      _id: {
        timestamp: 1763084584,
        date: "2025-11-14T01:43:04.000+00:00",
      },
      name: "The Deanna Stark Pasciuto Memorial Fund",
      organization: "Northern New Jersey Community Foundation",
      start_date: null,
      end_date: null,
      results: null,
      payouts: null,
      website:
        "https://www.nnjcf.org/cause-posts/the-deanna-stark-pasciuto-memorial-fund/",
      id: 13,
    },
    {
      _id: {
        timestamp: 1763084584,
        date: "2025-11-14T01:43:04.000+00:00",
      },
      name: "William F. Johnson Jr. Scholarship",
      organization: "Princeton Area Community Foundation",
      start_date: "2026-01-31",
      end_date: "2026-04-15",
      results: "2026-05-31",
      payouts: "2026-07-31",
      website:
        "https://pacf.org/grants-scholarships/scholarships/scholarships-for-students/#66ad7f7568793b5af",
      id: 4,
    },
    {
      _id: {
        timestamp: 1763084584,
        date: "2025-11-14T01:43:04.000+00:00",
      },
      name: "Sandra M. Glazier Scholarship Fund",
      organization: "Princeton Area Community Foundation",
      start_date: "2026-01-31",
      end_date: "2026-04-15",
      results: "2026-05-31",
      payouts: "2026-07-31",
      website:
        "https://pacf.org/grants-scholarships/scholarships/scholarships-for-students/#fc18f6efdfe71c587",
      id: 2,
    },
    {
      _id: {
        timestamp: 1763084584,
        date: "2025-11-14T01:43:04.000+00:00",
      },
      name: "A. Myrtle Hensor Teaching Scholarship",
      organization: "Princeton Area Community Foundation",
      start_date: "2026-01-31",
      end_date: "2026-04-15",
      results: "2026-05-31",
      payouts: "2026-07-31",
      website:
        "https://pacf.org/grants-scholarships/scholarships/scholarships-for-students/#b011b7ff45ca38416",
      id: 3,
    },
    {
      _id: {
        timestamp: 1763084584,
        date: "2025-11-14T01:43:04.000+00:00",
      },
      name: "1964 Ralph Gregg Memorial Scholarship Fund",
      organization: "Northern New Jersey Community Foundation",
      start_date: null,
      end_date: null,
      results: null,
      payouts: null,
      website:
        "https://www.nnjcf.org/cause-posts/ralph-gregg-memorial-scholarship-fund/",
      id: 15,
    },
    {
      _id: {
        timestamp: 1763084584,
        date: "2025-11-14T01:43:04.000+00:00",
      },
      name: "Princeton Post No.76 American Legion, Dr. Henry J. Frank Scholarship",
      organization: "Princeton Area Community Foundation",
      start_date: "2026-01-31",
      end_date: "2026-04-15",
      results: "2026-05-31",
      payouts: "2026-07-31",
      website:
        "https://pacf.org/grants-scholarships/scholarships/scholarships-for-students/#15d3b6386c432b5c4",
      id: 1,
    },
    {
      _id: {
        timestamp: 1763084584,
        date: "2025-11-14T01:43:04.000+00:00",
      },
      name: "The Lion Woodward Educational Fund of the Rotary Club of Trenton",
      organization: "Princeton Area Community Foundation",
      start_date: "2026-01-31",
      end_date: "2026-04-15",
      results: "2026-05-31",
      payouts: "2026-07-31",
      website:
        "https://pacf.org/grants-scholarships/scholarships/scholarships-for-students/#fd8c48ebc92d7d09e",
      id: 7,
    },
    {
      _id: {
        timestamp: 1763084584,
        date: "2025-11-14T01:43:04.000+00:00",
      },
      name: "Joanna Shyong Scholarship",
      organization: "Northern New Jersey Community Foundation",
      start_date: null,
      end_date: null,
      results: null,
      payouts: null,
      website:
        "https://www.nnjcf.org/cause-posts/the-joanna-shyong-scholarship-fund/",
      id: 8,
    },
    {
      _id: {
        timestamp: 1763084584,
        date: "2025-11-14T01:43:04.000+00:00",
      },
      name: "Edward Decker Memorial Fund",
      organization: "Northern New Jersey Community Foundation",
      start_date: null,
      end_date: null,
      results: null,
      payouts: null,
      website:
        "https://www.nnjcf.org/cause-posts/the-edward-decker-memorial-fund/",
      id: 9,
    },
    {
      _id: {
        timestamp: 1763084584,
        date: "2025-11-14T01:43:04.000+00:00",
      },
      name: "Community Foundation of New Jersey",
      organization: "Community Foundation of New Jersey",
      start_date: null,
      end_date: null,
      results: null,
      payouts: null,
      website: "https://cfnj.org/current-funds/student-scholarships/",
      id: 17,
    },
    {
      _id: {
        timestamp: 1763084584,
        date: "2025-11-14T01:43:04.000+00:00",
      },
      name: "Jannie Smith Legacy Fund",
      organization: "Northern New Jersey Community Foundation",
      start_date: null,
      end_date: null,
      results: null,
      payouts: null,
      website: "https://www.nnjcf.org/cause-posts/jannie-smith-legacy-fund/",
      id: 11,
    },
    {
      _id: {
        timestamp: 1763084584,
        date: "2025-11-14T01:43:04.000+00:00",
      },
      name: "Louise Maas Allied Health Professions Scholarship",
      organization: "Princeton Area Community Foundation",
      start_date: "2026-01-31",
      end_date: "2026-04-15",
      results: "2026-05-31",
      payouts: "2026-07-31",
      website:
        "https://pacf.org/grants-scholarships/scholarships/scholarships-for-students/#9783d12a93dd84f6b",
      id: 5,
    },
    {
      _id: {
        timestamp: 1763084584,
        date: "2025-11-14T01:43:04.000+00:00",
      },
      name: "David Vincent Rasa MD RPH Healthcare Scholarship Fund",
      organization: "Northern New Jersey Community Foundation",
      start_date: null,
      end_date: null,
      results: null,
      payouts: null,
      website:
        "https://www.nnjcf.org/cause-posts/david-vincent-rasa-md-rph-healthcare-scholarship-fund/",
      id: 10,
    },
    {
      _id: {
        timestamp: 1763084584,
        date: "2025-11-14T01:43:04.000+00:00",
      },
      name: "The Darren Drake Memorial Fund",
      organization: "Northern New Jersey Community Foundation",
      start_date: null,
      end_date: null,
      results: null,
      payouts: null,
      website:
        "https://www.nnjcf.org/cause-posts/the-darren-drake-memorial-fund-memorializes-darren-scott-drake/",
      id: 14,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="main">
        <div>
          <section className="scholarship-grid">
            {scholarships.map((scholarship) => (
              <Scholarship props={scholarship} key={scholarship.id} />
            ))}
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
