
const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

class Versions extends React.Component {
    render() {
        const {config: siteConfig} = this.props;
        if ((siteConfig.users || []).length === 0) {
            return null;
        }


        return (
            <div className="mainContainer">
                <Container padding={['bottom', 'top']}>
                    <div className="showcaseSection">
                        <div className="prose">
                            <h1>Page in developing</h1>
                            <p>Please follow to <a href="/blog">news</a></p>
                        </div>
                        <img src="img/undraw_work_in_progress_uhmv.svg" alt="work_in_progress"/>
                    </div>
                </Container>
            </div>
        );
    }
}

module.exports = Versions;
