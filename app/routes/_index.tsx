import type { MetaFunction } from "@remix-run/node";
import OreoCalculator from "./OreoCalculator";
import oreoImage from "../images/oreo.png";

export const meta: MetaFunction = () => {
  return [
    { title: "SEOreo" },
    { name: "description", content: "SEO's Oreo fund" },
  ];
};

export default function Index() {
  return (
    <div className="my-10 px-8 w-full flex flex-col items-center gap-y-16">
      <div>
        <div className="flex justify-center">
          <h1 className="text-8xl text-gray-800 font-black text-center text-wrap -tracking-[0.4px]">
            SE
          </h1>
          <img
            className="mt-2 w-[86px] h-[86px] animate-[spin_2s_linear_infinite]"
            src={oreoImage}
            alt="oreo"
          />
        </div>
        <h1 className="text-8xl text-gray-800 font-black text-center text-wrap -tracking-[0.4px]">
          Snack Fund
        </h1>
      </div>
      <div className="gap-y-16 flex flex-col">
        <p className="max-w-[450px] leading-6 text-gray-700">
          Welcome to the SEOreo Snack Fund—where innovation meets indulgence!
          We&apos;re a fund dedicated to fueling the most creative snack
          collection ideas for Neighbor, and we do it in the most delicious way
          possible. Instead of traditional dollars, we use Oreos as our
          currency, making every investment a sweet partnership. Whether
          you&apos;re a snack visionary or just have a taste for the
          unconventional, join us in turning innovative snack concepts into
          reality—one Oreo at a time.
        </p>
        <p className="max-w-[450px] leading-6 text-gray-700">
          Curious about how our tasty currency works? Use our converter below to
          see the value of your dollars in Oreos. Find out just how many Oreos
          it takes to fund your next big snack idea with the SEOreo Snack Fund
          and get ready to turn your delicious dreams into reality!
        </p>
      </div>
      <OreoCalculator />
    </div>
  );
}
