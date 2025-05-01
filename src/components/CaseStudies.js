import React, { useState } from "react";
import "./CaseStudies.css";
import PTGReusable from "./PTGReusable";
import dc1 from "../assets/dc1.png";
import dc2 from "../assets/dc2.png";
import dc3 from "../assets/dc3.png";
import sd1 from "../assets/sd1.png";
import sd2 from "../assets/sd2.png";
import sd3 from "../assets/sd3.png";
import nc1 from "../assets/nc1.png";
import nc2 from "../assets/nc2.png";
import nc3 from "../assets/nc3.png";
import wn1 from "../assets/wn1.png";
import wn2 from "../assets/wn2.png";
import wn3 from "../assets/wn3.png";
import dm1 from "../assets/dm1.png";
import dm2 from "../assets/dm2.png";
import dm3 from "../assets/dm3.png";
import Chatbot from "../components/Chatbot"; // Import chatbot component

const CaseStudies = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);

  const caseStudies = {
    "Data Center": [
      {
        title: " Chhattisgarh Statewide Network",
        img: dc1,
        sections: [
          {
            heading: "Customer situation",
            content: "Project for digital rural connectivity in Chhattisgarh.\nStatewide IP/MPLS fiber network for 6000 locations.\nRequired high coordination and advanced infra.",
          },
          {
            heading: "Challenges",
            content: "Huge rollout with tight timelines.\nGeographic and LWE (Left-Wing Extremism) challenges.\nLargest fiber network with multiple stakeholders.",
          },
          {
            heading: "Action Taken",
            content: "Designed and validated complete IP/MPLS network.\nDeployed automation-based IP solutions.\nDelivered high-end project management and logistics.",
          },
          {
            heading: "Results & Benefits",
            content: "Future-ready network successfully implemented.\nSmooth project rollout with automation.\nStrengthened rural digital infrastructure."
          },
        ],
      },
      {
        title: "Data Center Tech Upgrade",
        img:dc2,
        sections: [
          {
            heading: "Customer situation",
            content: "Government bank needed network upgrades.\nFocus on analytics, AAA, and firewall solutions.\nDesign and upgrade existing infra.",
          },
          {
            heading: "Challenges",
            content: "Compatibility between old servers and new switches.\nMinimize downtime and switch copper to fiber.\nStringent deadlines and tech alignment.",
          },
          {
            heading: "Action Taken",
            content: "Understood current infra and traffic flow.\nInstalled/configured Nexus, Fortigate, and more.\nRan 24x7 upgrade support with SLA management.",
          },
          {
            heading: "Results & Benefits",
            content: "Successfully upgraded DC and DR.\nMet all timelines.\nReceived appreciation from the government.",
          },
        ],
      },
      {
        title: "Banking Data Center Ops",
        img:dc3,
        sections: [
          {
            heading: "Customer situation",
            content: "Required datacenter and DR site build.\nNeeded managed services for both.\nHigh-level coordination with end-users.",
          },
          {
            heading: "Challenges",
            content: "SLA timelines, SOPs, and checklists.\nFull datacenter build with service coordination.\nCustomer relationship handling.",
          },
          {
            heading: "Action Taken",
            content: "Provided HLD, LLD, and installed/configured infra.\nDelivered 24x7 operations and SLA management.\nSetup NOC for remote support and expedited delivery.",
          },
          {
            heading: "Results & Benefits",
            content: "Smooth project coordination.\nStrong tech and operations support.\nSeamless rollout of datacenter.",
          },
        ],
      },
    ],
    "SD-WAN": [
      {
        title: "SDWAN Rollout – South India",
        img: sd1,
        sections: [
          {
            heading: "Customer situation",
            content: "Bank needed to migrate MPLS to SDWAN across DC, DR, HO, and branches.\nRequired hardware refresh and complete overlay setup.\nTargeted high-level coordination for 510+ branches.",
          },
          {
            heading: "Challenges",
            content: "SLA timelines and datacenter readiness.\nHardware refresh in autonomous mode before SDWAN.\nMigrating branch routers remotely to controller mode.",
          },
          {
            heading: "Action Taken",
            content: "Assessed underlay design and device traffic.\nInstalled and configured SDWAN components.\nPolicy optimization, SLA management, and training programs.",
          },
          {
            heading: "Results & Benefits",
            content: "Seamless rollout for 510 branches.\nStrong coordination and NOC/Field support.\nHigh-level technology management and optimization.",
          },
        ],
      },
      {
        title: "Indian Bank SDWAN Ops",
        img: sd2,
        sections: [
          {
            heading: "Customer situation",
            content: "A major bank needed a Network Management & Monitoring Service (NMMS).\nWanted to improve operations across 1932+ branches and 3500+ links.\nRequired end-to-end WAN management and vendor coordination.",
          },
          {
            heading: "Challenges",
            content: "Complex transition from previous service provider.\nCoordination with multiple vendors.\nMaintaining consistent high uptime.",
          },
          {
            heading: "Action Taken",
            content: "Deployed on-site network team using bank-provided tools.\nSeamless transition management from old provider.\nImplemented SLAs to ensure performance.",
          },
          {
            heading: "Results & Benefits",
            content: "Improved network uptime via 24x7 monitoring.\nEnhanced operational efficiency.\nScalability for new branches and links at no extra cost.",
          },
        ],
      },
      {
        title: "Networking & Office Automation",
        img: sd3,
        sections: [
          {
            heading: "Customer situation",
            content: "Chinese conglomerate setting up offices in India.\nNeeded wired/wireless network and office automation.\nCommedia handled complete solution delivery.",
          },
          {
            heading: "Challenges",
            content: "Strict timelines and no downtime allowed.\nCost-effective with high quality standards.\nMulti-location rollout with multiple OEMs.",
          },
          {
            heading: "Action Taken",
            content: "Deployed full mesh network with high availability.\nUsed CISCO, Avaya, and Polycom systems.\nWork done during off-hours, delivered on time.",
          },
          {
            heading: "Results & Benefits",
            content: "Seamless deployment with top-class products.\nZero disruption to business operations.\nTimely project completion.",
          },
        ],
      },
    ],
    "Network Security": [
      {
        title: "Banking Security Ops",
        img: nc1,
        sections: [
          {
            heading: "Customer situation",
            content: "Service provider needed managed SOC operations for a bank.\nIncluded deployment of L1-L3 and Shift Leads for PAN-India service.\n",
          },
          {
            heading: "Challenges",
            content: "SLA-based timelines and SOP adherence.\nResponse time improvement and customer handling.\nTech coordination across 25+ security platforms.",
          },
          {
            heading: "Action Taken",
            content: "Delivered managed services across 25+ technologies.\nDeployed 59+ resources across multiple levels.\n24x7 operations, NOC configuration.",
          },
          {
            heading: "Results & Benefits",
            content: "High-level coordination and smooth rollout.\nStrong tech + project management.\nEffective 24x7 operations with advanced tools.",
          },
        ],
      },
      {
        title: "LIC Collaboration Systems",
        img: nc2,
        sections: [
          {
            heading: "Customer situation",
            content: "LIC needed to upgrade over 100 boardrooms across India.\nExisting UC tech was outdated and needed migration to Cisco UC.\nIncluded full VC infrastructure including DC in Hyderabad.",
          },
          {
            heading: "Challenges",
            content: "Rapid site surveys for architectural adjustments.\nInstallation of large, complex VC devices.\nHigh-end aesthetics and quality expectations in boardrooms.",
          },
          {
            heading: "Action Taken",
            content: "Conducted site surveys and captured all requirements.\nInstalled ROOM70D and KITPLUS VC endpoints across locations.\nSet up call managers, meeting servers, and configured all licenses and features.",
          },
          {
            heading: "Results & Benefits",
            content: "Entire VC migration project completed successfully \nacross multiple locations.\nCustomer satisfied with Cisco’s advanced \nVC features and call flows.",
          },
        ],
      },
      {
        title: "Fortinet Device Migration",
        img: nc3,
        sections: [
          {
            heading: "Customer situation",
            content: "Bank migrating to FortiGate 3001F firewalls for DC and DR.\nNeeded centralized configuration and monitoring.",
          },
          {
            heading: "Challenges",
            content: "High availability firewall setup.\nCentralized management via FortiManager.\nVersion control, policy migration, and software updates.",
          },
          {
            heading: "Action Taken",
            content: "Analyzed existing security architecture thoroughly.\nDeployed hyperscale FortiGate FWs, managed via FMG/FAZ.\nMigrated and configured policies, centralized log and event monitoring.",
          },
          {
            heading: "Results & Benefits",
            content: "Highly secure FortiGate deployment.\nTemplate-based configuration and reporting.\nCustomized solution delivery per bank’s needs.",
          },
        ],
      },
    ],
    "Wireless Networking": [
      {
        title: "Petroleum WiFi Deployment ",
        img: wn1,
        sections: [
          {
            heading: "Customer situation",
            content: "Aruba wireless deployment across 100 PAN-India petroleum sites.\nRequired high-security, long-term support.\n",
          },
          {
            heading: "Challenges",
            content: "Coordination across multiple fuel stations.\nSoftware/hardware integration with Radius Auth.\nProject management across locations.",
          },
          {
            heading: "Action Taken",
            content: "Aruba APs, switches, Radius setup.\nFive-year support and monitoring.\nEnd-to-end infrastructure deployment.",
          },
          {
            heading: "Results & Benefits",
            content: "Seamless rollout and integration.\nReliable WiFi for all users.",
          },
        ],
      },
      {
        title: "Cisco Meraki WiFi Project",
        img: wn2,
        sections: [
          {
            heading: "Customer situation",
            content: "Health insurer needed to migrate from traditional APs to Cisco Meraki WiFi.\n60 APs across four floors.",
          },
          {
            heading: "Challenges",
            content: "Seamless network transition.\nRadius server integration.\nEnsure roaming and throughput.",
          },
          {
            heading: "Action Taken",
            content: "POC and close customer collaboration.\nHeat map and solution design.\nFull implementation with Meraki Dashboard.",
          },
          {
            heading: "Results & Benefits",
            content: "Roaming + high-speed WiFi.\nReal-time cloud monitoring.\nSmooth connectivity across all zones.",
          },
        ],
      },
      {
        title: "Railway WiFi Execution",
        img: wn3,
        sections: [
          {
            heading: "Customer situation",
            content: "Indian Railways aimed to connect over 4791 stations to WiFi.\nTight 60-day delivery window.\nRequired quality and zonal execution.",
          },
          {
            heading: "Challenges",
            content: "High-scale deployment in 60 days.\nPermissions and multilevel coordination.\nHigh-tech integration across zones.",
          },
          {
            heading: "Action Taken",
            content: "Zonal rollout strategy with shadow teams.\nUsed mobile app for project tracking and QC.\nRound-the-clock NOC enabled faster execution.",
          },
          {
            heading: "Results & Benefits",
            content: "Target achieved with appreciation.\nHigh-quality execution across India.\nMulti-location rollout success.",
          },
        ],
      },
    ],
    "Digital Media": [
      {
        title: "LIC UC Infrastructure Refresh",
        img: dm1,
        sections: [
          {
            heading: "Customer situation",
            content: "LIC had 100+ offices with outdated UC tech nearing end of life.\nRequired migration to Cisco UC across all boardrooms, including Hyderabad DC.\nNeeded improved multiparty video conferencing infrastructure.",
          },
          {
            heading: "Challenges",
            content: "Tight timeframe for site surveys and implementation.\nPhysically large and complex devices requiring architectural adaptation.\nHigh-end boardroom aesthetics and quality expectations.",
          },
          {
            heading: "Action Taken",
            content: "Conducted detailed site surveys and pre-install readiness.\nDeployed Cisco ROOM70D, KITPLUS endpoints.\nInstalled Call Manager & Meeting Servers at DC.\nConfigured all features and licenses.",
          },
          {
            heading: "Results & Benefits",
            content: "Successfully completed multi-location migration.\nImproved call flow with Cisco Advanced VC.\nHigh customer satisfaction.",
          },
        ],
      },
      {
        title: "Live Stadium Broadcast Delivery",
        img: dm2,
        sections: [
          {
            heading: "Customer situation",
            content: "Service provider needed professional services to deliver live content.\nStadiums already fiber-connected, required last-mile content handling.",
          },
          {
            heading: "Challenges",
            content: "No tolerance for downtime during live events.\nRequired zero-failure, highly available system.\nSkilled manpower needed for monitoring and quality assurance.\nCoordination across Stadium, NOC, and studios.",
          },
          {
            heading: "Action Taken",
            content: "Partnered with TATA to develop stadium broadcast product.\nDelivered professional monitoring and integration services.\nEnabled connectivity between Stadium, NOC, and Studios.\nProvided support within studios.",
          },
          {
            heading: "Results & Benefits",
            content: "Smooth live broadcast delivery with zero failures.\nHigh-quality experience monitoring and deployment.\nTimely execution across all stadiums and venues.",
          },
        ],
      },
      {
        title: "Telco Streaming Upgrade",
        img: dm3,
        sections: [
          {
            heading: "Customer situation",
            content: "Leading telecom & broadcasting company in Papua New Guinea.\nWanted to offer multiscreen TV services over a private network.\nRequired a full digital media streaming setup.",
          },
          {
            heading: "Challenges",
            content: "Complex integration with existing online network infrastructure.\nNeeded cloud streaming support within strict budget limits.\nAccurately estimating and scaling for user base was critical.",
          },
          {
            heading: "Action Taken",
            content: "Detailed analysis of network and workflow requirements.\nProject management and system integration executed by Commedia.\nImplemented Harmonic VS7000 and WOWZA-based streaming platform.",
          },
          {
            heading: "Results & Benefits",
            content: "Delivered scalable and robust streaming solution.\nMaintained timeline with seamless implementation.\nEnabled multi-format streaming across devices.",
          },
        ],
      },
    ],
  };
  
  const handleOpenPopup = (caseStudy) => {
    setSelectedCase(caseStudy);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedCase(null);
  };

  return (
    <div className="case-studies-container">
      <h2 className="case-studies-heading">CASE STUDIES</h2>

      <div className="case-studies-list">
        {Object.keys(caseStudies).map((category) => (
          <div key={category} className="category-column">
            <div className="category-header">{category}</div>

            {caseStudies[category].map((study, index) => (
              <div
                key={index}
                className="case-card"
                onClick={() => handleOpenPopup(study)}
              >
                <img
                  src={study.img || "https://via.placeholder.com/300x150"}
                  alt={study.title}
                  className="case-image"
                />
                <p className="case-title">{study.title}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {showPopup && <PTGReusable caseStudy={selectedCase} onClose={handleClosePopup} />}
      <Chatbot /> {/* Add Chatbot here */}
    </div>
  );
};

export default CaseStudies;
