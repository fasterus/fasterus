/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
    render() {
        const {siteConfig, language = ''} = this.props;
        const {baseUrl, docsUrl} = siteConfig;
        const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
        const langPart = `${language ? `${language}/` : ''}`;
        const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

        const SplashContainer = props => (
            <div className="homeContainer">
            <div className="TwoColumns reverse">
                <div className="column first right">
                    <img src={siteConfig.laptopImage} alt="laptop"/>
                </div>
                <div className="column last left">
                    <div className="wrapper homeWrapper">{props.children}</div>
                </div>
            </div>
            </div>
        );

        const Logo = props => (
            <div className="projectLogo">
                <img src={props.img_src} alt="Project Logo"/>
            </div>
        );


        const ProjectTitle = props => (
            <h2 className="projectTitle">
                {props.title.toUpperCase()}
                <small>{props.tagline}</small>
            </h2>
        );

        const PromoSection = props => (
            <div className="section promoSection">
                <div className="promoRow">
                    <div className="pluginRowBlock">{props.children}</div>
                </div>
            </div>
        );

        const Button = props => (
            <div className="pluginWrapper buttonWrapper">
                <a className="button" href={props.href} target={props.target}>
                    {props.children}
                </a>
            </div>
        );

        return (
            <SplashContainer>
                <div className="inner">
                    <ProjectTitle tagline={siteConfig.tagline}
                                  title='Fasterus'/>
                    <PromoSection>
                        <Button href="/blog/2020/02/21/first-step">Get started</Button>
                        <a href="developing" className="learnMoreButton">Learn more ></a>
                    </PromoSection>
                </div>
            </SplashContainer>
        );
    }
}

class Index extends React.Component {
    render() {
        const {config: siteConfig, language = ''} = this.props;
        const {baseUrl} = siteConfig;

        const Block = props => (
            <Container
                padding={['bottom', 'top']}
                id={props.id}
                background={props.background}>
                <GridBlock
                    align="{props.align}"
                    contents={props.children}
                    layout={props.layout}
                />
            </Container>
        );

        const Wave = props => (
            <div style={{height: props.height || '100px', backgroundColor: props.secondColor}}
                 overflow="hidden">
                <svg
                    preserveAspectRatio="none"
                    viewBox="0 0 500 150"
                    style={{height: "100%", width: "100%"}}
                >
                    <path
                        fill={props.primeColor}
                        d="M0 92.27c216.83 100.65 304.3-83.88 500 16.76V0H0z"
                    ></path>
                </svg>
            </div>);


        const FeatureCallout = () => (
            <div
                className="productShowcaseSection "
                style={{textAlign: 'center'}}>
                <MarkdownBlock>Features of this project</MarkdownBlock>
            </div>
        );


        const StartupersBlock = () => (
            <Block background="light">
                {[
                    {
                        content:
                            'The ultimate quick start to test your idea. We have gathered around a large number of different modules so that you can create your product as simple as possible from them.',
                        align: 'left',
                        image: `${baseUrl}img/undraw_to_the_moon_v1mv.svg`,
                        imageAlign: 'right',
                        title: 'For Startupers',
                    },
                ]}
            </Block>
        );
        const ManagersBlock = () => (
            <Block background="dark">
                {[
                    {
                        content:
                            'You have the opportunity to automate your workflows. Achieve great results through automation of routine processes for which you do not want to waste your time.',
                        image: `${baseUrl}img/undraw_schedule_pnbk.svg`,
                        imageAlign: 'left',
                        title: 'For Managers',
                    },
                ]}
            </Block>
        );
        const ProgrammersBlock = () => (
            <Block background="light">
                {[
                    {
                        content:
                            'The platform will help get rid of writing big parts boilerplate of code. Thus, you can concentrate on the business logic of the product. And you can finally begin to do interesting tasks for the programmer every single day.',
                        image: `${baseUrl}img/undraw_developer_activity_bv83.svg`,
                        imageAlign: 'right',
                        title: 'For Programmers',
                    },
                ]}
            </Block>
        );
        const AnalyticsAndFinanciersBlock = () => (
            <Block background="dark">
                {[
                    {
                        content:
                            ' Upgrade to work productivity to the next level. You can manage a lot of data flow much easier. Develop complex calculation models and test the result on the fly.',
                        image: `${baseUrl}img/undraw_setup_analytics_8qkl.svg`,
                        imageAlign: 'left',
                        title: 'For Analytics and Financiers',
                    },
                ]}
            </Block>
        );
        const BusinessBlock = () => (
            <Block background="light">
                {[
                    {
                        content:
                            'Allows your employees to quickly complete assigned tasks. This helps to roll out more new features to the market, faster competitors. The platform also definitely improves the quality of the product, as it uses a proven work scheme',
                        image: `${baseUrl}img/undraw_business_deal_cpi9.svg`,
                        imageAlign: 'right',
                        title: 'For Business',
                    },
                ]}
            </Block>
        );


        const Features = () => (
            <Block layout="fourColumn">
                {[
                    {
                        content: 'It helps to keep track of who and how made changes to the project.',
                        image: `${baseUrl}img/undraw_version_control_9bpv.svg`,
                        imageAlign: 'top',
                        title: 'Version Control',
                    },
                    {
                        content: 'Takes the issues of publishing and automating the deployment of your solution.',
                        image: `${baseUrl}img/undraw_maker_launch_crhe.svg`,
                        imageAlign: 'top',
                        title: 'Publish',
                    },
                    {
                        content: 'It contains tools for checking your business logic on correct work.',
                        image: `${baseUrl}img/undraw_to_do_list_a49b.svg`,
                        imageAlign: 'top',
                        title: 'Testing',
                    },
                    {
                        content: 'Maximum easy and fast programming for any user level.',
                        image: `${baseUrl}img/undraw_easter_egg_hunt_r36d.svg`,
                        imageAlign: 'top',
                        title: 'Code without complexity',
                    },
                    {
                        content: 'Works on Linux, Mac, Windows. Also, you can create your solution for any other platform.',
                        image: `${baseUrl}img/undraw_web_devices_ad58.svg`,
                        imageAlign: 'top',
                        title: 'Cross platform',
                    },
                    {
                        content: 'The platform includes built-in encryption tools. To protect your product.',
                        image: `${baseUrl}img/undraw_Security_on_ff2u.svg`,
                        imageAlign: 'top',
                        title: 'Security',
                    },
                    {
                        content: 'Visual data management will simplify your work. Will make it more understandable and more productive.',
                        image: `${baseUrl}img/undraw_control_panel1_20gm.svg`,
                        imageAlign: 'top',
                        title: 'Visual function',
                    },

                ]}
            </Block>
        );


        return (
            <div>
                <HomeSplash siteConfig={siteConfig} language={language}/>
                <Wave primeColor={'#4c4e51'} secondColor={'white'} height={'33px'}/>
                <div className="mainContainer">
                    <FeatureCallout/>
                    <Features/>
                    <Wave primeColor={'white'} secondColor={'#f7f7f7'}/>
                    <StartupersBlock/>
                    <Wave primeColor={'#f7f7f7'} secondColor={'#7F93BB'}/>
                    <ManagersBlock/>
                    <Wave primeColor={'#7F93BB'} secondColor={'#f7f7f7'}/>
                    <ProgrammersBlock/>
                    <Wave primeColor={'#f7f7f7'} secondColor={'#7F93BB'}/>
                    <AnalyticsAndFinanciersBlock/>
                    <Wave primeColor={'#7F93BB'} secondColor={'#f7f7f7'}/>
                    <BusinessBlock/>
                    <Wave primeColor={'#f7f7f7'} secondColor={'#20232a'}/>
                </div>
            </div>
        );
    }
}

module.exports = Index;
