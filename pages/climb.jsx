import Image from "next/image";

export default function Climb() {
    return (
        <section className="climb" id="team">
            <div className="climb__header-bg">
                <div className="climb__header container-lg">
                    <Image src="/images/climb-header.png" alt="02. Climb" width={232} height={127}/>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Omnis rem unde numquam, quam voluptatibus quis
                        recusandae! Quas eum aspernatur laudantium?
                    </p>
                </div>
            </div>

            <div className="climb__tab-bg">
                <div className="climb__tab-container container-lg">
                    <button className="climb__tab-button climb__tab-mountain-1 header-font is-active">
                        Mountain 1
                    </button>

                    <button className="climb__tab-button climb__tab-mountain-2 header-font">
                        Mountain 2
                    </button>
                </div>

                <div className="tab-1 climb__tab-content is-active">
                    <div className="climb__table container-lg">
                        <table>
                            <thead>
                                <tr className="td-right">
                                    <th colSpan="2" className="header-font td-left">
                                        Schedule
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="td-left">25 Nov 2022</td>
                                    <td className="td-right">Vestibulum viverra</td>
                                </tr>
                                <tr>
                                    <td className="td-left">28 Nov 2022</td>
                                    <td className="td-right">Vestibulum viverra</td>
                                </tr>
                                <tr>
                                    <td className="td-left">&nbsp;</td>
                                    <td className="td-right">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td className="td-left">18 Dec 2022</td>
                                    <td className="td-right">Vestibulum viverra</td>
                                </tr>
                                <tr>
                                    <td className="td-left">&nbsp;</td>
                                    <td className="td-right">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td className="td-left td-bottom">
                                        7 Jan 2023
                                    </td>
                                    <td className="td-right td-bottom">
                                        Vestibulum viverra
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="tab-2 climb__tab-content">
                    <div className="climb__table container-lg">
                        <table>
                            <thead>
                                <tr>
                                    <th colSpan="2" className="header-font">
                                        Schedule
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="td-left">17 Nov 2022</td>
                                    <td className="td-right">Vestibulum viverra</td>
                                </tr>
                                <tr>
                                    <td className="td-left">&nbsp;</td>
                                    <td className="td-right">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td className="td-left">13 Dec 2022</td>
                                    <td className="td-right">Vestibulum viverra</td>
                                </tr>
                                <tr>
                                    <td className="td-left">28 Dec 2022</td>
                                    <td className="td-right">Vestibulum viverra</td>
                                </tr>
                                <tr>
                                    <td className="td-left">&nbsp;</td>
                                    <td className="td-right">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td className="td-left td-bottom">
                                        9 Feb 2023
                                    </td>
                                    <td className="td-right td-bottom">
                                        Vestibulum viverra
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}