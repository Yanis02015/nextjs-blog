import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
        <a href="https://software.download.prss.microsoft.com/dbazure/Win10_21H2_French_x64.iso?t=08d5b339-dcb9-4ab2-b683-8a2b419ba47b&e=1662410406&h=959a1b7eb5c05555024c929366f2e86f4d2f5fba42028810c85f1c29fe465e03">
          Windows 10
        </a>
      </h2>
      <Image
        src="/images/profile.jpeg" // Route of the image file
        width={144} // Desired size with correct aspect ratio
        height={144}
        layout="responsive"
        alt="Your Name"
      />
    </Layout>
  );
}
