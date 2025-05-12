import Header from './components/Header';
import Content from './components/Content';
import data from './data';

const App = () => {
    let contentElements = data.map((content) => {
        return(
            <Content 
                key={content.id} 
                {...content}
            />
        );
    });
    return(
        <>
            <Header />
            {contentElements}
            <hr className="line" />
        </>
    )
}

export default App;