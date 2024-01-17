import React from "react";
import styles from "@/styles/pages/sponsorship.module.scss";
import PageLayout from "@/components/layout/PageLayout";

function fellowship() {
    return (
        <PageLayout title={"Fellowship | Indiscon 2024"}>
            <h2 className={styles.heading}>Travel Grants</h2>
            <p
                style={{
                    textAlign: "justify",
                    lineHeight: "20px",
                    marginBottom: "20px",
                }}
            >
                INDISCON 2024 is pleased to offer financial support to the
                selected IEEE student first author for presenting their research
                work during INDISCON 2024 Conference. The grant will be awarded
                to a limited number of applicants on a highly competitive basis.
                The grant will help to cover Conference registration fees or
                partial travel of the authors for attending the Conference. The
                decision regarding this grant will be taken by the Conference
                Fellowship Committee.
            

            The interested student authors can email at ieeeindiscon2024@gmail.com with the following details:
            Paper ID:
            Paper Title:
            Authors Names and Affiliations (with country name):
            Abstract:
            Email :
            Contact Number:
            </p>

            <h2 className={styles.heading}>Awards</h2>

            <p
                style={{
                    textAlign: "justify",
                    lineHeight: "20px",
                    marginBottom: "20px",
                }}
            >
                Best Paper/Poster Awards will be presented to author&apos;s
                whose work represents groundbreaking research. The chairs of
                each track nominated a set of top papers for the award, and
                these nominations were reviewed by a committee. The committee
                considered each nominated paper, its reviewer comments, and a
                nomination statement by the chairs.
            </p>

            <div>
                <h4>
                    The interested student authors can email at{" "}
                    <span
                        style={{
                            textDecoration: "underline",
                            color: "rgb(48, 111, 160)",
                        }}
                    >
                        ieeeindiscon2024@gmail.com
                    </span>{" "}
                    with the following details:
                </h4>
                Paper ID:
                <br />
                Paper Title:
                <br />
                Authors Names and Affiliations (with country name):
                <br />
                Abstract:
                <br />
                Email :<br />
                Contact Number:
                <br />
            </div>
        </PageLayout>
    );
}

export default fellowship;
