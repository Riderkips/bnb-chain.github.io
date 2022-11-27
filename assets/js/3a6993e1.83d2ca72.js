"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[3926],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(a),d=o,b=p["".concat(l,".").concat(d)]||p[d]||u[d]||r;return a?n.createElement(b,i(i({ref:t},h),{},{components:a})):n.createElement(b,i({ref:t},h))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},72384:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>r,contentTitle:()=>i,metadata:()=>s,toc:()=>l,default:()=>h});var n=a(87462),o=(a(67294),a(3905));const r={sidebar_label:"Overview",sidebar_position:2},i="ZkBNB - The Scaling breakthrough for BNB Chain",s={unversionedId:"zkbnb/zkbnb-overview",id:"zkbnb/zkbnb-overview",isDocsHomePage:!1,title:"ZkBNB - The Scaling breakthrough for BNB Chain",description:"In the document we outline a high-level overview of the relevant features, before taking a look at the specific details of architecture, storage layout, tokenomics, etc.",source:"@site/docs/zkbnb/zkbnb-overview.md",sourceDirName:"zkbnb",slug:"/zkbnb/zkbnb-overview",permalink:"/docs/zkbnb/zkbnb-overview",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/zkbnb/zkbnb-overview.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Overview",sidebar_position:2},sidebar:"bscSideBar",previous:{title:"BNB Sidechain Pilot Projects",permalink:"/docs/BNBSidechain/bs-pilot-projects"},next:{title:"Architecture",permalink:"/docs/zkbnb/zkbnb-architecture"}},l=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"What is ZkBNB?",id:"what-is-zkbnb",children:[],level:2},{value:"Why ZkBNB?",id:"why-zkbnb",children:[],level:2},{value:"What features does ZkBNB offer?",id:"what-features-does-zkbnb-offer",children:[],level:2},{value:"Who Will Benefit ZkBNB?",id:"who-will-benefit-zkbnb",children:[],level:2},{value:"Related Projects",id:"related-projects",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],c={toc:l};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"zkbnb---the-scaling-breakthrough-for-bnb-chain"},"ZkBNB - The Scaling breakthrough for BNB Chain"),(0,o.kt)("p",null,"In the document we outline a high-level overview of the relevant features, before taking a look at the specific details of architecture, storage layout, tokenomics, etc."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Blockchain technology has been always under criticism for its scalability issues. With a tenfold increase in the total number of users and transactions, this problem became much more evident. Several solutions have been proposed to overcome this shortcoming which is the biggest hurdle in the path of mass adoption of blockchain. For example, Layer-1 solutions, such as Proof-of-Stake and Sharding, aim to improve performance by implementing changes to the Mainnet. As well as Layer-2 solutions, like rollups, increase the number of processed transactions by offloading transactions off of Mainnet (Layer-1) while still maintaining the same security measures and decentralization as the Mainnet."),(0,o.kt)("p",null,'Some of these solutions can be regarded as application-specific (e.g., channels), while others as general-purpose (e.g., side-chains). However, there was still a lack of a "global solution" that could work for every blockchain platform. This was until the introduction of the Zero-Knowledge Rollups (ZK Rollups), which are considered the ultimate Layer-2 solution for blockchain-related scalability problems.'),(0,o.kt)("p",null,"As of writing, the total Daily Active Addresses (DAA) on BSC is around ",(0,o.kt)("a",{parentName:"p",href:"https://ycharts.com/indicators/sources/bscscan"},"815,620"),", whereas the total number of transactions per day is ~",(0,o.kt)("a",{parentName:"p",href:"https://ycharts.com/indicators/reports/binance_smart_chain_statistics"},"3.572M"),". In not so distant past, on July 29th, 2021, the total network utilization of BSC saw the ",(0,o.kt)("a",{parentName:"p",href:"https://bscscan.com/chart/networkutilization"},"highest peak of up to 90%"),", leading the core dev team to devise scalability solutions to overcome this issue. Harnessing the power of zkRollups, BNB Smart Chain has introduced ZkBNB, a breakthrough in the scalability solutions for blockchain technologies."),(0,o.kt)("h2",{id:"what-is-zkbnb"},"What is ZkBNB?"),(0,o.kt)("p",null,"ZkBNB is built on ZK (Zero Knowledge) Rollup architecture. ZK Rollups is a Layer-2 solution where all the computations and state changes are done off-chain, that is on a sidechain. In this architecture, \xa0a summary of the changes along with some cryptographic proofs for proving the validity of these changes are posted to the Mainnet."),(0,o.kt)("p",null,'Like zkRollups, ZkBNB has the capability to bundle (or "roll-up") hundreds of transactions into a single batch (Rollup Block) off-chain and generate a cryptographic proof. These proofs can come in the form of ',(0,o.kt)("a",{parentName:"p",href:"https://cointelegraph.com/explained/zk-starks-vs-zk-snarks-explained"},"SNARKs (succinct non-interactive argument of knowledge)"),", which can prove the validity of every single transaction in the Rollup Block. It ensures that all funds are held on the BSC, while computation and storage are performed on ",(0,o.kt)("a",{parentName:"p",href:"https://docs.bnbchain.org/docs/BNBSidechain/overview/bs-overview"},"BNB Sidechains)")," with less cost and fast speed. Furthermore, thanks to the use of zk-SNARK proofs, ZkBNB shares the same security as that of BNB Smart Chain."),(0,o.kt)("h2",{id:"why-zkbnb"},"Why ZkBNB?"),(0,o.kt)("p",null,"To resolve the network scalability problems faced by BSC, a new standard called BEP100 was proposed to introduce a modular framework for creating BSC-compatible sidechains. Sidechains are essentially separate blockchains that run independently of the main blockchain (BSC), but are, however, connected to the BSC Mainnet via a two-way bridge. BEP100 proposes for these sidechains \xa0to connect to BSC by a native relayer hub, which will \xa0result in an overall improvement in the performance of the network and provide much higher throughput and lower gas fees. Furthermore, the security of native relayer hub is guaranteed by the side chain. Nevertheless, bridges are now being considered as top targets for hackers as attacks on bridges account for 69% of total funds stolen in 2022. Therefore, there was a need to provide a solution that would not only overcome network scalability issues, but also help in secure communication of BSC and BSC-compatible sidechains. Thereforth, zkBNB, an architecture built on the ",(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/scaling/zk-rollups/"},"zero knowledge rollups, was introduced"),"."),(0,o.kt)("h2",{id:"what-features-does-zkbnb-offer"},"What features does ZkBNB offer?"),(0,o.kt)("p",null,"Currently, ZkBNB implements the following features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Same Security as that of L1:")," The ZkBNB shares the same security as BSC does. Due to the use of zkSNARK proofs, the security is guaranteed cryptographically. Users do not have to trust any third parties or keep monitoring the Rollup blocks in order to prevent frauds."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Seamless L1-L2 Communication"),": BNB and BEP20/BEP721/BEP1155 tokens created on BSC or ZkBNB can flow freely between BSC and ZkBNB."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Built-in instant AMM (Automated Market Maker) swap:")," ZkBNB allows digital assets to be traded without permission and automatically by using built-in liquidity pools."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Built-in NFT marketplace:")," Developers can build marketplaces for crypto collectibles and NFTs (non-fungible tokens) out of the box on ZkBNB."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Fast transaction speed and faster finality:")," With performance a key priority for BNB Smart Chain, zkBNB puts up astonishing figures with an ability to support 100 million addresses and handle up to 10 thousand transactions per second (TPS), which are unparallel figures in the blockchain industry."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"**"),"Gas Tokens:",(0,o.kt)("strong",{parentName:"li"}," The gas token on the ZkBNB can be either BEP20 or BNB, with fees up to 10x lower**")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},'"Full exit" on BSC:'),' If a user feels that his transactions are censored by ZkBNB, at any time, they can request a "full exit" operation to withdraw funds. This means users can withdraw funds at any time.')),(0,o.kt)("h2",{id:"who-will-benefit-zkbnb"},"Who Will Benefit ZkBNB?"),(0,o.kt)("p",null,"User experience has always been the top priority for the BNB Smart Chain. This is why ZkBNB was built with blockchain-based games and social media projects in mind."),(0,o.kt)("p",null,"In a nutshell, all the developers in the Web3 community can take advantage of the incredible features offered by ZkBNB. In particular, anyone looking to develop NFT dApps, can make the most of ZkBNB thanks to the built-in NFT marketplace and API services. These features make it simple to setup an 'out-of-the-box' marketplace for crypto collectibles and NFTs."),(0,o.kt)("p",null,"With ZkBNB, long delays pertaining to on-chain resolutions will be a thing of the past. As ZkBNB offers straightforward token operations out-of-the-box, developers can now efficiently transfer BNB and other digital tokens (BEP20/BEP721/BEP1155) seamlessly between BSC and ZkBNB. Resulting in faster execution of lengthy transaction lists while ensuring a seamless undisturbed experience."),(0,o.kt)("p",null,"Additionally, ZkBNB offers a set of robust REST API services, ensuring that developers with previously established gaming or content projects can launch their projects on Web3 quickly and seamlessly with ZkBNB."),(0,o.kt)("p",null,"Another distinguishing factor of ZkBNB is its ability to enhance the user experience by introducing a built-in naming service. This naming service offers legible names in transactions, even storing all user addresses and receiving crypto, tokens, or NFTs. This feature of human interaction, although simple, goes a long way to lending a sense of agency to a space that is looking to attract new users."),(0,o.kt)("h2",{id:"related-projects"},"Related Projects"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/zkbnb-contract"},"ZkBNB Rollup Contracts"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/zkbnb-crypto"},"ZkBNB Crypto"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/zkbnb-eth-rpc"},"ZkBNB Eth RPC"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/zkbnb-go-sdk"},"ZkBNB Go SDK"),".")),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"BNB Chain's ZkBNB is an innovation targeted to have a significant impact on building large-scale BNB Smart Chain-based applications with guaranteed security and transaction speed, faster finality, and significantly reduced transaction fees. Its launch follows the launch of BNB sidechains earlier this year, a framework for creating sidechains within the BNB Chain ecosystem."),(0,o.kt)("p",null,"With the release of ZkBNB Testnet in November, the Mainnet is targeted to launch in Q1 of 2023. More about BNB Smart Chain innovative projects can be looked at ",(0,o.kt)("a",{parentName:"p",href:"https://www.bnbchain.org/en/blog/bnb-chain-tech-roadmap-2022/"},"BNB Chain's 2022 roadmap"),"."))}h.isMDXComponent=!0}}]);