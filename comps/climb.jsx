import { useState } from "react";
import Image from "next/image";

export default function Climb() {
    const [tabIndex, setTabIndex] = useState(0);

    const tabDatas = [
        {
            title: "Mountain 1",
            image: "/images/tab-img-1.png",
            table: [
                "Schedule",
                ["25 Nov 2022", "Vestibulum viverra"],
                ["28 Nov 2022", "Vestibulum viverra"],
                ["", ""],
                ["18 Dec 2022", "Vestibulum viverra"],
                ["", ""],
                ["7 Jan 2023", "Vestibulum viverra"],
            ],
        },
        {
            title: "Mountain 2",
            image: "/images/tab-img-2.png",
            table: [
                "schedule",
                ["17 Nov 2022", "Vestibulum viverra"],
                ["", ""],
                ["13 Dec 2022", "Vestibulum viverra"],
                ["28 Dec 2022", "Vestibulum viverra"],
                ["", ""],
                ["9 Feb 2023", "Vestibulum viverra"],
            ],
        },
    ];

    return (
        <section className="climb" id="team">
            <div className="climb__header-bg">
                <div className="climb__header container-lg">
                    <div>
                        <Image
                            src="/images/climb-header.png"
                            alt="02. Climb"
                            width={232}
                            height={127}
                            layout="fixed"
                            className="climb__header-image"
                        />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Omnis rem unde numquam, quam voluptatibus quis
                        recusandae! Quas eum aspernatur laudantium?
                    </p>
                </div>
            </div>
            {/* map over buttons, onClick, setTabIndex(index of button)  */}

            <div className="climb__tab-bg">
                <div className="climb__tab-container container-lg">
                    {tabDatas.map((tab, i) => {
                        return (
                            <button
                                className={`climb__tab-button climb__tab-mountain-${
                                    i + 1
                                } header-font ${tabIndex === i && "is-active"}`}
                                onClick={() => setTabIndex(i)}
                                key={tab.title}
                            >
                                {tab.title}
                            </button>
                        );
                    })}
                </div>
                {tabDatas.map((tab, i) => {
                    if (tabIndex === i) {
                        return (
                            <div
                                className={`tab-${i + 1} climb__tab-content ${
                                    tabIndex === i && "is-active"
                                }`}
                                key={tab.title}
                            >
                                <div className="climb__table container-lg">
                                    <table>
                                        <thead>
                                            <tr className="td-right">
                                                <th
                                                    colSpan="2"
                                                    className="header-font td-left"
                                                >
                                                    {tab.table[0]}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tab.table.map((row, i) => {
                                                const listLen =
                                                    tab.table.length;
                                                const testing = () => {
                                                    if (listLen === i)
                                                        console.log("True");
                                                };
                                                testing();
                                                if (i !== 0) {
                                                    return (
                                                        <tr key={i}>
                                                            {/* Add blank row if row is empty in list */}
                                                            {/* Add padding to last elements */}
                                                            <td
                                                                className={`td-left ${
                                                                    listLen -
                                                                        1 ===
                                                                        i &&
                                                                    "td-bottom"
                                                                }`}
                                                            >
                                                                {row[0] !==
                                                                "" ? (
                                                                    row[0]
                                                                ) : (
                                                                    <>&nbsp;</>
                                                                )}
                                                            </td>
                                                            <td
                                                                className={`td-right ${
                                                                    listLen -
                                                                        1 ===
                                                                        i &&
                                                                    "td-bottom"
                                                                }`}
                                                            >
                                                                {row[1]}
                                                            </td>
                                                        </tr>
                                                    );
                                                }
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </section>
    );
}
