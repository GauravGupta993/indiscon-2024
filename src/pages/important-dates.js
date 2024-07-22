import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AiOutlineForm } from "react-icons/ai";
import { Handshake, LaptopMac } from "@mui/icons-material";
import { MdChecklist } from "react-icons/md";
import { BiTrophy } from "react-icons/bi";
import styles from "@/styles/pages/importantdates.module.scss";
import {useState} from 'react';

const events = [
    {
        title: "Call for papers",
        date: "February 01, 2024",
        description: "",
        icon: <AiOutlineForm />,
    },
    {
        title: "Call for tutorials and workshop proposals",
        date: "February 01, 2024",
        description: "",
        icon: <Handshake />,
    },
    {
        title: "Last date of submission for regular papers",
        date: "March 31, 2024",
        description: "",
        icon: <LaptopMac />,
    },
    {
        title: "Last date for submission of tutorials and workshop proposals",
        date: "March 31, 2024",
        description: "",
        icon: <MdChecklist />,
    },
    {
        title: "Notification of regular paper acceptance",
        date: "May 15, 2024",
        description: "",
        icon: <BiTrophy />,
    },
    {
        title: "Notification of tutorials and workshop proposals acceptance",
        date: "May 31, 2024",
        description: "",
        icon: <BiTrophy />,
    },
    {
        title: "Last date for early bird registration",
        date: "May 31, 2024",
        description: "",
        icon: <BiTrophy />,
    },
    {
        title: "Last date for camera ready paper submission",
        date: "June 10, 2024",
        description: "",
        icon: <BiTrophy />,
    },
    {
        title: "Last date for conference registration",
        date: "June 15, 2024",
        description: "",
        icon: <BiTrophy />,
    },
    {
        title: "Conference dates",
        date: "August 22-24, 2024",
        description: "",
        icon: <BiTrophy />,
    },
];

function ImportantDates() {
    const [updatedEvents, setUpdatedEvents] = useState(events.map(event => {
        if (event.date === "March 31, 2024") {
            return {
                ...event,
                date: (
                    <>
                        <del>{event.date}</del> <span style={{ color: 'red' }}>[Extended]: April 15, 2024</span>
                    </>
                )
            };
        }
        if (event.date === "May 15, 2024") {
            return {
                ...event,
                date: (
                    <>
                        <del>{event.date}</del> <del style={{ color: 'red' }}><span style={{ color: 'red' }}>May 30, 2024</span></del><span style={{ color: 'red' }}> June 07, 2024</span>
                    </>
                )
            };
        }
        if (event.title === "Last date for early bird registration") {
            return {
                ...event,
                date: (
                    <>
                        {/* <del>{event.date}</del> <span style={{ color: 'red' }}>June 30, 2024</span> */}
                        <del>{event.date}</del> <span style={{ color: 'red' }}>July 15, 2024</span>
                    </>
                )
            };
        }
        if (event.title === "Last date for camera ready paper submission") {
            return {
                ...event,
                date: (
                    <>
                        <del>{event.date}</del> <span style={{ color: 'red' }}>July 31, 2024</span>
                    </>
                )
            };
        }
        if (event.title === "Last date for conference registration") {
            return {
                ...event,
                date: (
                    <>
                        <del>{event.date}</del> <span style={{ color: 'red' }}>July 31, 2024</span>
                    </>
                )
            };
        }
        return event;
    }));

    return (
        <PageLayout title={"Important Dates | Indiscon 2024 "}>
            <div>
                <h1 className={styles.heading}>Timeline</h1>
                <VerticalTimeline lineColor="rgb(48, 111, 160)">
                    {updatedEvents.map((event, i) => {
                        return (
                            <VerticalTimelineElement
                                key={i}
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                    background: "rgba(48, 111, 160, 0.2)",
                                    backdropFilter: "blur( 8px )",
                                    boxShadow:
                                        "0 8px 32px 0 rgba( 0, 0, 0, 0.18 )",
                                    borderRadius: "10px",
                                    border: "1px solid rgba( 255, 255, 255, 0.18 )",
                                    position: "relative",
                                    zIndex: "0",
                                }}
                                contentArrowStyle={{
                                    borderRight: "7px solid  rgb(33, 150, 243)",
                                }}
                                date={event.date}
                                dateClassName={styles.date}
                                iconStyle={{
                                    background: "rgb(2,36,61,0.3)",
                                    color: "#fff",
                                    backdropFilter: "blur(8px)",
                                }}
                                icon={event.icon}
                            >
                                <h3 className={styles.description}>
                                    {event.title}
                                </h3>
                            </VerticalTimelineElement>
                        );
                    })}
                </VerticalTimeline>
            </div>
        </PageLayout>
    );
}

export default ImportantDates;
