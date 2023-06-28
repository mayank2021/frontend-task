import "../styles/globals.css";
import { PortfolioContextProvider } from "../components/Context/PortfolioContext";
import { ResumeContextProvider } from "../components/Context/resumeContext";
import { ProfileContextProvider } from "../components/Context/ProfileContext";

export default function App({ Component, pageProps }) {
  return (
    <PortfolioContextProvider>
      <ResumeContextProvider>
        <ProfileContextProvider>
          <Component {...pageProps} />
        </ProfileContextProvider>
      </ResumeContextProvider>
    </PortfolioContextProvider>
  );
}
