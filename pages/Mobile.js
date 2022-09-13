import Head from "next/head";
import Image from "next/image";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";
import Nav from "../components/UI/Nav";
import Projects from "../components/UI/Projects";
import SectionList from "../components/UI/SectionList";

const Mobile = () => {
  const projectList = [
    {
      image: "/assets/original.png",
      title: "Ecare - Clinic App for Patient More Screens",
      profile: "/assets/profile.jpg",
      name: "Sans Brothers 1",
    },
    {
      image: "/assets/original.png",
      title: "Ecare 2 - Clinic App for Patient More Screens",
      profile: "/assets/profile.jpg",
      name: "Sans Brothers 2",
    },
    {
      image: "/assets/original.png",
      title: "Ecare 3 - Clinic App for Patient More Screens",
      profile: "/assets/profile.jpg",
      name: "Sans Brothers 3",
    },
    {
      image: "/assets/original.png",
      title: "Ecare 4 - Clinic App for Patient More Screens",
      profile: "/assets/profile.jpg",
      name: "Sans Brothers 4",
    },
  ];

  const sectionList = [
    {
      listName: "Home",
      ListUrl: "/Home",
    },
    {
      listName: "About",
      ListUrl: "/About",
    },
    {
      listName: "Services",
      ListUrl: "/Services",
    },
  ];

  return (
    <div>
      <Head>
        <title>Mobile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />

        <div id="wrap">
          <div className="container-large signed-out-masthead signed-out-hero js-signed-out-masthead">
            <Nav />

            <div className="hero-media" id="hero-media">
              <video
                src="/assets/mobile-banner-video.mp4"
                className="hero-media-asset is-visible"
                autoPlay
                muted
                loop
              ></video>
            </div>
            <div className="text-content hero-text-content">
              <h1 className="hero-text-content-h1">
              Trending mobile designs for iOS, Android, and tablet
              </h1>
              <h2 className="hero-text-content-h2 font-body margin-v-16">
              Discover trending mobile designs for apps on iOS, Android, tablets from popular design portfolios
              </h2>
            </div>
            <div className="search-input-hero search-input-with-dropdown">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                role="img"
                className="icon fill-current search-icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.6002 12.0498C9.49758 12.8568 8.13777 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3486 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667C13.3333 8.15637 12.8447 9.53194 12.019 10.6419C12.0265 10.6489 12.0338 10.656 12.0411 10.6633L15.2935 13.9157C15.6841 14.3063 15.6841 14.9394 15.2935 15.33C14.903 15.7205 14.2699 15.7205 13.8793 15.33L10.6269 12.0775C10.6178 12.0684 10.6089 12.0592 10.6002 12.0498ZM11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"
                ></path>
              </svg>
              <form
                action="https://dribbble.com/search"
                className="js-search-input-form search-input-form"
                method="get"
              >
                <label for="search" className="accessibility-text">
                  Search
                </label>
                <input
                  id="search"
                  type="search"
                  name="q"
                  placeholder="Search..."
                  value=""
                  className="search-input js-search-input"
                />
              </form>
            </div>
            <SectionList list={sectionList} />
          </div>
          <div id="wrap-inner" className="flushed">
            <div id="content" role="main">
              <div id="main" className="main-full">
              <ol className="js-thumbnail-grid shots-grid group dribbbles  container-fluid">
                    {projectList.map((element) => (
                      <Projects
                        imagePath={element.image}
                        shotTitle={element.title}
                        profilePic={element.profile}
                        displayName={element.name}
                      />
                    ))}
                  </ol>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Mobile;
