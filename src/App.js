import Header from "./components/Header";
import styled from "styled-components";
import FullPage from "./components/FullPage";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import { Player } from "video-react";
import demonstration from "./assets/demonstration.mp4";

function App() {
  return (
    <AppBg>
      <Header />
      <FullPage>
        <PageSection id="what_is_it">
          <h1>What is it</h1>
          <p>
            <b>Definition:</b> Ransomware is a type of malware that
            cybercriminals use to hold your files hostage until you pay a ransom
            within a timeframe. Once the ransom is paid, usually through
            Bitcoin, the attacker would then give you access to those files.
          </p>
          <p>
            <b>Form of Ransomware:</b> The most common form of ransomware is
            through deceptive emails or messages, which sometimes end up in your
            spam folder. This method is called phishing. They may tell you that
            you won a free gift card or that something is wrong with your
            account and that you need to log in.
          </p>
          <p>
            There are also a couple of methods cybercriminals use that don’t
            require fooling people. An example of this is by using a remote desk
            protocol (RDP). RDP was developed by Microsoft and it allows you
            access another computer via your computer. This protocol normally
            has legitimate uses such as having technical support gaining access
            to your PC to troubleshoot issues you may be having.
          </p>
          <p>
            <b>Form of Ransomware:</b> In other cases, cybercriminals target
            Windows processes. They write over features on Windows such as
            svchost to execute their attack because svchost can hide the
            malicious coding. Using RDP, the attackers try to find desktops on
            the internet that have exposed ports. They can also try to remote
            into your device by looking for where its security vulnerabilities
            are. If this method doesn’t work, then they might try using leaked
            credentials found during breaches which are distributed through the
            Dark Web.
          </p>
        </PageSection>
      </FullPage>
      <FullPage>
        <PageSection id="what_does_it_do">
          <h1>What does it do</h1>
          <p>
            The ransomware executes from the downloaded malicious file, and
            moves to another location to complete the attack. After the file is
            moved, the cybercriminal then proceeds to encrypt the data so that
            the individual it belongs to won’t have access to it. They will then
            move it back to where it was taken from, and all of this would be
            done without anyone noticing because it would be a feature that no
            one pays attention to. Once the file is returned, the victim has no
            way of decrypting it and would have lost all access to it. The only
            way to decrypt this file would be with a decryption key, which is
            basically a code that allows you to reclaim access to your files.
          </p>
          <p>
            <b>Petya:</b> Petya, not to be confused with NotPetya, is a form of
            ransomware that also tricks victims in order to gain administrative
            level access to their device. The only difference is that it doesn’t
            choose which files to encrypt, rather it uses a method that denies
            the computer access to the filesystem that tells it where your files
            are. Your files would be unencrypted, but there would be no way for
            you to access it because they’re not able to be found. After having
            done this, they flash a message on your device saying you need to
            pay a specific amount in Bitcoin
          </p>
        </PageSection>
      </FullPage>
      <FullPage>
        <VideoDiv id="demonstration">
          <h1>Demo</h1>
          <Player
            playsInline
            poster="/assets/poster.png"
            width="100%"
            height="100%"
            src={demonstration}
          />
        </VideoDiv>
      </FullPage>
      <FullPage>
        <PageSection id="what_can_you_do">
          <h1>What can you do</h1>
          <p>
            Defending against ransomware attacks is the one of the best ways to
            ensure it doesn’t affect or happen to you. It’s never a bad thing to
            make sure you’re ready if an attack like this doesn’t happen to you.
            One of the most important things you can do to defend yourself is to
            backup all your important data.
          </p>
          <p>
            <b>The backup 3-2-1 rule:</b> There's this rule of thumb called the
            backup 3-2-1 rule, this is just a way to remember what to backup and
            how many of it. The 3 is telling you to backup three copies of
            things that you care about. The 2 is telling you to backup your
            files in at least two different formats or media types. An example
            of this could be a DVD and an external hard drive. The 1 is an
            off-site copy. If something ever happens to your house, this could
            be a flood, a fire, or something along those lines, you’d have a
            copy that is located somewhere else or in the cloud service such as
            Dropbox or Google Drive.
          </p>
          <p>
            <b>Software: </b> One of the easiest ways to avoid ransomware is to
            use security software or update your software. Security software
            helps to secure and protect your computer or any computing enabled
            device. If your software isn’t updated or enabled, you’re open to a
            wide range of threats.
          </p>
          <p>
            <b>Suspicious Messages and Links:</b> Don’t click on messages or
            links that seem suspicious. Only open messages from trusted senders.
            If you receive a message that seems too good to be true, then most
            likely it is not true. Sometimes links are used to download viruses
            into your device, so if you’ve been sent a random link, try not to
            click on it. If you’ve been sent something from someone you don’t
            know or trust, then it’s safer not to open it, but to report and
            delete it.
          </p>
          <p>
            <b>Use a secure network:</b> Have you ever been in a grocery store
            and so badly needed to use your device but didn’t have internet
            access? So, you’d go to see which ones were free to use, and you
            come across one that says it’s not secure, but it didn’t matter to
            you because you just wanted to use your device. If a network
            connection states that it isn’t secure, and you decide to connect
            anyways, that’s one of the easiest ways for cybercriminals to gain
            access to your device. Although it doesn’t happen to everyone, it’s
            still a good idea to be cautious and to not use any apps that have
            sensitive information or open wifi connections.
          </p>
          <br />
          <p>
            If your device is already in the process of being attacked make sure
            that the device is disconnected from other devices, whether it be
            through bluetooth or wifi etc. It’s like a virus, you want to
            isolate the infected so that the others don’t get sick. Don’t pay
            the ransom because your files could come back damaged, or the
            cybercriminal might never return it after having received the money.
            If the cybercriminal demands a ransom and you pay it, it’s possible
            that they still withhold your files so that they can get more money.
            Paying the attacker could make you prone to other attacks in the
            future. Instead, report the ransomware to authorities and they will
            help you with your problem.
          </p>
        </PageSection>
      </FullPage>
    </AppBg>
  );
}

export default App;

const AppBg = styled.div`
  height: 100vh;
  width: 100vw;
`;

const PageSection = styled.section`
  width: 80%;
  color: white;
`;

const VideoDiv = styled.div`
  height: 30rem;
  width: 50rem;
  color: white;
`;
