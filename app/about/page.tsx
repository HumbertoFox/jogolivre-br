import AboutClient from './about-client';
import ObjectiveClient from './objective-client';
import WhoWeAreClient from './whoweare-client';

export default function AboutPage() {
    return (
        <main className="min-h-screen min-w-full flex flex-col max-w-3xl">
            <AboutClient />
            <ObjectiveClient />
            <WhoWeAreClient />
        </main>
    );
}