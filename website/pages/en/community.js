const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Community(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;
  const pageUrl = doc => `${baseUrl}${doc}`;

  const supportLinks = [
    {
      content: 'Currently under development',
      title: 'Browse Docs',
    },
    {
      content: 'Ask questions about the documentation and project ' +
          'in [Twitter](https://twitter.com/FasterusOrg), ' +
          '[Discord](https://discord.gg/qvrPtca), ' +
          '[Telegram](https://t.me/fasterus), ' +
          '[GitHub](https://github.com/fasterus), '+
          '[Mail](mailto:support@fasterus.org)',
      
      title: 'Join the community',
    },
    {
      content: `Find out what's new with this project in our [blog](${pageUrl('blog')})`,
      title: 'Stay up to date',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Community</h1>
          </header>
          <p>This project is maintained by small group of people. We just started walking and would be glad if you joined us</p>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Community;
