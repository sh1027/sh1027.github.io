import Image from "next/image";
import NavBar from '@/app/ui/navbar';
import { SiGmail, SiGithub, SiLinkedin, SiGooglescholar, SiOrcid } from "react-icons/si";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-neutral-100">
      <div className='sticky top-0 z-10'>
        <NavBar />
      </div>

      <div className="max-w-screen-lg mx-auto flex flex-col py-10 space-y-10">
        {/* Profile */}
        <div className="flex flex-col md:items-start mx-10 space-y-5">
          <div className="flex flex-col md:flex-row items-center md:space-x-5">
            <div className="flex-initial mb-5 md:mb-0">
              <Image
                className="mx-auto rounded-full"
                src="/profile.webp"
                alt="Profile Image"
                width={128}
                height={128}
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-xl text-neutral-900 mb-3">Shiori Ueda</h1>
              <h2 className="text-base text-neutral-600 font-light">Ph.D. student</h2>
              <h3 className="text-sm text-neutral-600 font-light">Keio University, Japan</h3>
              <div className="flex justify-between gap-3 text-neutral-800 mt-3">
                <Link href="mailto:shiori.ueda@keio.jp">< SiGmail /></Link>
                <Link href="https://github.com/sh1027">< SiGithub /></Link>
                <Link href="https://www.linkedin.com/in/shiori-ueda-7a17b3243">< SiLinkedin /></Link>
                <Link href="https://scholar.google.co.jp/citations?user=eTi6vz4AAAAJ">< SiGooglescholar /></Link>
                <Link href="https://orcid.org/0009-0007-3820-6919">< SiOrcid /></Link>
              </div>
            </div>
          </div>
          <div className="text-sm text-neutral-800">
            <p>I am a Ph.D. student advised by <Link href="http://www.hvrl.ics.keio.ac.jp/">Prof.Hideo Saito</Link> at Keio University, Japan. My research interests include computer vision and machine learning. Motivated by my background as a photographer, I am passionate about capturing reality beyond conventional optical capture.</p>
          </div>
        </div>
        {/* Education */}
        <div className="flex flex-col items-start mx-10 space-y-2">
          <h1 className="text-xl text-neutral-900">Education</h1>
          <ul className="text-sm text-neutral-800 font-light ml-3 w-full max-w-screen-lg space-y-1">
            <li>
              <div className="flex flex-col md:flex-row">
                <h3 className="font-normal md:basis-3/4">B. Engineering, Keio University, Kanagawa, Japan</h3>
                <p className="text-left">Apr. 2018 - Mar. 2022</p>
              </div>
            </li>
            <li>
              <div className="flex flex-col md:flex-row">
                <h3 className="font-normal md:basis-3/4"><span>M.S. in Engineering</span>, Keio University, Kanagawa, Japan</h3>
                <p className="text-left">Apr. 2022 - Sep. 2023</p>
              </div>
            </li>
            <li>
              <div className="flex flex-col md:flex-row">
                <h3 className="font-normal md:basis-3/4">Ph.D in Engineering, Keio University, Kanagawa, Japan</h3>
                <p className="text-left">Sep. 2023 - Present</p>
              </div>
            </li>
          </ul>
        </div>
        {/* Publications */}
        <div className="flex flex-col items-start mx-10 space-y-2">
          <h1 id="publications" className="text-xl text-neutral-900">Publications</h1>
          <h2 className="text-base text-neutral-800">Journal Papers</h2>
          <ol className="list-decimal text-sm text-neutral-800 font-light pl-8 space-y-3">
            <li>
              <div>
                <h3 className="font-semibold">3D shape estimation of wires from 3D X-ray CT images of electrical cables</h3>
                <p><span className="text-neutral-900 underline">Shiori Ueda*</span>, Kanon Sato*, Hideo Saito, Yutaka Hoshina, in Journal of Electronic Imaging (accepted) *equal contribution</p>
              </div>
            </li>
          </ol>
          <h2 className="text-base text-neutral-800">Journal Papers (in Japanese)</h2>
          <ol className="list-decimal text-sm text-neutral-800 font-light pl-8 space-y-3">
            <li>
              <div>
                <h3 className="font-semibold">電線ケーブル3次元X線CT画像からの素線検出と追跡による3次元構造推定</h3>
                <p><span className="text-neutral-900 underline">上田栞</span>, 藤井亮, 斎藤英雄, 星名豊, 画像電子学会誌, Vol.52, No.1, pp.164-173, 2023 <Link href="https://cir.nii.ac.jp/crid/1520859138425155712">[Paper]</Link></p>
              </div>
            </li>
            <li>
              <div>
                <h3 className="font-semibold">深層学習による顕微鏡focal stack画像からの全焦点画像の生成</h3>
                <p><span className="text-neutral-900 underline">上田栞</span>, 藤井亮, 斎藤英雄, 菅野純一, 足立秀之, 精密工学会誌, Vol.89, No.3, pp.265-274, 2023 <Link href="https://doi.org/10.2493/jjspe.89.265">[Paper]</Link></p>
              </div>
            </li>
          </ol>
          <h2 className="text-base text-neutral-800">International Conferences</h2>
          <ol className="list-decimal text-sm text-neutral-800 font-light pl-8 space-y-3">
            <li>
              <div>
                <h3 className="font-semibold">3D shape estimation of wires from 3D x-ray CT images of electrical cables</h3>
                <p><span className="text-neutral-900 underline">Shiori Ueda</span>, Kanon Sato, Hideo Saito, Yutaka Hoshina, Proc. SPIE 12749, Sixteenth International Conference on Quality Control by Artificial Vision (QCAV), 2023 <Link href="https://doi.org/10.1117/12.2689548">[Paper]</Link></p>
              </div>
            </li>
            <li>
              <div>
                <h3 className="font-semibold">Toward Multi-Plane Image Reconstruction from a Casually Captured Focal Stack</h3>
                <p><span className="text-neutral-900 underline">Shiori Ueda</span>, Hideo Saito, Shohei Mori, Proc. International Conference on Computer Vision Theory and Applications (VISAPP), 2023 <Link href="https://mugichoko445.github.io/projects/ueda_visapp24/">[Project Page]</Link><Link href="https://doi.org/10.5220/0012438700003660">[Paper]</Link></p>
              </div>
            </li>
          </ol>
        </div>
        {/* Grants */}
        <div className="flex flex-col items-start mx-10 space-y-2">
          <h1 className="text-xl text-neutral-900">Grants</h1>
          <ul className="text-sm text-neutral-800 font-light ml-3 w-full max-w-screen-lg space-y-1">
            <li>
              <div className="flex flex-col md:flex-row">
                <h3 className="font-normal md:basis-3/4">JST Support for Pioneering Research Initiated by the Next Generation</h3>
                <p className="text-left">Sep. 2023 - Mar. 2024</p>
              </div>
            </li>
            <li>
              <div className="flex flex-col md:flex-row">
                <h3 className="font-normal md:basis-3/4">JSPS Research Fellowship for Young Scientists (DC1)</h3>
                <p className="text-left">Apr. 2024 - Present</p>
              </div>
            </li>
          </ul>
        </div>
        {/* Cooperative Research */}
        <div className="flex flex-col items-start mx-10 space-y-2">
          <h1 className="text-xl text-neutral-900">Cooperative Research</h1>
          <ul className="text-sm text-neutral-800 font-light ml-3 w-full max-w-screen-lg space-y-1">
            <li>
              <div className="flex flex-col md:flex-row">
                <h3 className="font-normal md:basis-3/4">ViSCO Technologies Corporation</h3>
                <p className="text-left">Apr. 2021 - Present</p>
              </div>
            </li>
            <li>
              <div className="flex flex-col md:flex-row">
                <h3 className="font-normal md:basis-3/4">Sumitomo Electric Industries, Ltd.</h3>
                <p className="text-left">June. 2021 - Mar. 2024</p>
              </div>
            </li>
            <li>
              <div className="flex flex-col md:flex-row">
                <h3 className="font-normal md:basis-3/4">OMRON SINIC X Corporation</h3>
                <p className="text-left">Apr. 2022 - Mar. 2024</p>
              </div>
            </li>
          </ul>
        </div>
        {/* Work Experiences */}
        <div className="flex flex-col items-start mx-10 space-y-2">
          <h1 className="text-xl text-neutral-900">Work Experiences</h1>
          <ul className="text-sm text-neutral-800 font-light ml-3 w-full max-w-screen-lg space-y-1">
            <li>
              <div className="flex flex-col md:flex-row">
                <h3 className="font-normal md:basis-3/4">AI and Advanced Programming Consortium</h3>
                <p className="text-left">Apr. 2022 - Present</p>
              </div>
            </li>
            <li>
              <div className="flex flex-col md:flex-row">
                <h3 className="font-normal md:basis-3/4">Research Internship, LINE Computer Vision Lab <Link href="https://engineering.linecorp.com/ja/blog/internship-cvl-ueda">[Blog]</Link></h3>
                <p className="text-left">Aug. 2022 - Sep. 2022</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main >
  );
}
