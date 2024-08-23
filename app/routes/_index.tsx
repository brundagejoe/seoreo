import type { MetaFunction } from "@remix-run/node";
import OreoCalculator from "./OreoCalculator";
import oreoImage from "../images/oreo.png";
import { useSearchParams } from "@remix-run/react";
import SeriesCAnnouncement from "./SeriesCAnnouncement";

export const meta: MetaFunction = () => {
  return [
    { title: "SEOreo" },
    { name: "description", content: "SEO's Oreo fund" },
  ];
};

export default function Index() {
  const [searchParams] = useSearchParams();
  const showAnnouncement = searchParams.get("announcement") === "true";
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
      {showAnnouncement ? (
        <SeriesCAnnouncement />
      ) : (
        <>
          <div className="gap-y-16 flex flex-col">
            <p className="max-w-[450px] leading-6 text-gray-700">
              Welcome to the SEOreo Snack Fund—where innovation meets
              indulgence! We&apos;re a fund dedicated to fueling the most
              creative snack collection ideas for Neighbor, and we do it in the
              most delicious way possible. Instead of traditional dollars, we
              use Oreos as our currency, making every investment a sweet
              partnership. Whether you&apos;re a snack visionary or just have a
              taste for the unconventional, join us in turning innovative snack
              concepts into reality—one Oreo at a time.
            </p>
            <p className="max-w-[450px] leading-6 text-gray-700">
              Curious about how our tasty currency works? Use our converter
              below to see the value of your dollars in Oreos. Find out just how
              many Oreos it takes to fund your next big snack idea with the
              SEOreo Snack Fund and get ready to turn your delicious dreams into
              reality!
            </p>
          </div>
          <OreoCalculator />
        </>
      )}
      <p className="mb-4 mt-[200px] text-[10px] text-gray-400">
        <strong>Section 1: Contribution Cap</strong> 1.1 To ensure equitable
        distribution of ownership interests within the SEOreo Snack Fund (“the
        Fund”), individual contributions are strictly capped at a maximum
        threshold of 850,653 Oreos (<em>the Contribution Cap</em>). 1.2 The
        Contribution Cap is implemented to prevent any single participant (
        <em>Partner</em>) from obtaining a disproportionate share of the Fund,
        thereby maintaining a balanced and fair investment structure. 1.3
        Contributions exceeding the Contribution Cap will be rejected or, if
        accepted in error, shall be returned to the contributing Partner, less
        any administrative fees incurred by the Fund in processing the
        contribution. <strong>Section 2: Ownership Interest Allocation</strong>{" "}
        2.1 Ownership interests within the Fund are directly proportional to the
        amount of Oreos contributed by each Partner, subject to the Contribution
        Cap. 2.2 No Partner shall hold more than the maximum allowable ownership
        interest, as determined by their contribution and the total number of
        Oreos in the Fund at any given time. 2.3 The Fund reserves the right to
        adjust the allocation of ownership interests in the event of errors,
        miscalculations, or other anomalies that may affect the distribution of
        shares. <strong>Section 3: Aggregate Contributions</strong> 3.1 The
        total aggregate contributions to the Fund shall be monitored to ensure
        compliance with the Contribution Cap. 3.2 In the event that the total
        contributions approach the Fund&apos;s maximum capacity, the Fund may
        suspend or terminate additional contributions at its sole discretion.
        3.3 Partners shall be notified of any suspension or termination of
        contributions, along with any associated timelines and procedures for
        the return of excess contributions.{" "}
        <strong>Section 4: Compliance and Enforcement</strong> 4.1 All Partners
        are required to adhere to the Contribution Cap and the rules governing
        ownership interests. 4.2 The Fund reserves the right to take corrective
        actions, including but not limited to adjusting ownership interests,
        returning excess contributions, or terminating a Partner&apos;s
        participation in the Fund, in cases of non-compliance. 4.3 Any disputes
        arising from the enforcement of these rules shall be subject to
        arbitration as outlined in the Fund&apos;s dispute resolution
        procedures. Currency Conversion and Valuation{" "}
        <strong>Section 5: Oreo Valuation</strong> 5.1 The Fund utilizes Oreos
        as its exclusive currency for contributions and transactions. The value
        of Oreos in relation to traditional currency (e.g., U.S. dollars) is
        determined by the Fund&apos;s designated Oreo Converter Tool. 5.2 The
        Oreo Converter Tool provides a real-time conversion rate based on
        prevailing market conditions, including but not limited to the
        availability of Oreos, demand for contributions, and other economic
        factors deemed relevant by the Fund. 5.3 The Fund reserves the right to
        adjust the conversion rate at any time, with or without notice, to
        reflect changes in market conditions or other factors influencing the
        value of Oreos.
        <strong>Section 6: Contribution Process</strong> 6.1 All contributions
        to the Fund must be made in Oreos, converted from traditional currency
        through the Oreo Converter Tool. 6.2 Partners must complete the
        conversion process prior to making contributions, ensuring that the
        appropriate number of Oreos is credited to their account within the
        Fund. 6.3 The Fund will issue confirmation of receipt for all
        contributions, specifying the number of Oreos received and the
        corresponding ownership interest allocated to the contributing Partner.
        <strong>Section 7: Conversion Rate Adjustments</strong> 7.1 The Fund
        reserves the right to implement conversion rate adjustments to address
        fluctuations in the value of Oreos or to accommodate changes in the
        Fund&apos;s operational needs. 7.2 Any adjustments to the conversion
        rate will be communicated to Partners in advance, along with an
        explanation of the reasons for the change and its potential impact on
        future contributions. 7.3 Partners are responsible for monitoring
        conversion rates and making contributions in accordance with the
        prevailing rate at the time of their transaction.{" "}
        <strong>Section 8: Valuation Disputes</strong> 8.1 In the event of a
        dispute regarding the valuation of Oreos or the conversion rate applied
        to a contribution, the Fund&apos;s determination shall be considered
        final and binding. 8.2 Disputes shall be resolved in accordance with the
        Fund&apos;s dispute resolution procedures, which may include arbitration
        or other methods of alternative dispute resolution. 8.3 The Fund
        reserves the right to suspend or withhold contributions or ownership
        interest allocations during the pendency of any valuation dispute.
        Participant Rights and Obligations{" "}
        <strong>Section 9: Rights of Partners</strong> 9.1 Each Partner in the
        Fund shall have the right to participate in decision-making processes,
        including voting on matters that may affect the Fund&apos;s operation,
        subject to the terms and conditions outlined herein. 9.2 Partners shall
        receive periodic reports on the performance and status of the Fund,
        including updates on the value of their ownership interests and any
        changes to the Contribution Cap or other relevant rules. 9.3 The Fund
        shall provide Partners with access to the Oreo Converter Tool and other
        resources necessary to manage their contributions and ownership
        interests. <strong>Section 10: Obligations of Partners</strong> 10.1
        Partners are obligated to comply with all rules and regulations
        governing the Fund, including but not limited to the Contribution Cap,
        conversion processes, and ownership interest allocations. 10.2 Partners
        must promptly notify the Fund of any changes to their contact
        information or other relevant details that may affect their
        participation in the Fund. 10.3 Failure to comply with the Fund&apos;s
        rules may result in penalties, including but not limited to the loss of
        ownership interests, suspension of participation, or termination of the
        Partner&apos;s relationship with the Fund.{" "}
        <strong>Section 11: Fund Management</strong>
        11.1 The Fund shall be managed by a designated team of Fund Managers,
        responsible for overseeing the day-to-day operations, including the
        receipt and allocation of contributions, maintenance of the Oreo
        Converter Tool, and enforcement of Fund rules. 11.2 Fund Managers shall
        have the authority to make decisions on behalf of the Fund, subject to
        the approval of Partners as required by the Fund&apos;s governing
        documents. 11.3 The Fund reserves the right to amend its rules,
        policies, or procedures at any time, with notice provided to Partners as
        required by law or the Fund&apos;s governing documents.{" "}
        <strong>Section 12: Termination and Dissolution</strong> 12.1 The Fund
        may be terminated or dissolved upon the occurrence of certain events,
        including but not limited to a vote of the Partners, bankruptcy, or
        other circumstances that render the continued operation of the Fund
        impracticable. 12.2 In the event of termination or dissolution, the
        Fund&apos;s assets, including any remaining Oreos, shall be distributed
        to Partners in accordance with their ownership interests, after the
        payment of any outstanding liabilities or obligations. 12.3 The
        Fund&apos;s termination or dissolution shall be conducted in accordance
        with applicable laws and regulations, and Partners shall be provided
        with notice of the process and any relevant timelines.{" "}
        <strong>Section 13: Miscellaneous Provisions</strong> 13.1 This document
        constitutes the entire agreement between the Partners and the Fund
        regarding the matters addressed herein and supersedes any prior
        agreements or understandings, whether written or oral. 13.2 Any
        amendments to this document must be made in writing and signed by the
        authorized representatives of the Fund and the affected Partners. 13.3
        If any provision of this document is found to be invalid or
        unenforceable, the remaining provisions shall continue in full force and
        effect. 13.4 This document shall be governed by and construed in
        accordance with the laws of the jurisdiction in which the Fund is
        domiciled, without regard to its conflict of laws principles. 13.5
        Notwithstanding any other provision in this document, if any of the
        founding Partners of the Fund declares so, the terms and conditions set
        forth herein shall be rendered null and void, and shall hold no binding
        legal effect on the Fund or its Partners.
      </p>
    </div>
  );
}
