import {TitleText} from './Title.styled';

const Section = ({title = ' ', children}) => (
    <div
    style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        fontSize: 40,
        color: '#010101',
        marginBottom: '40px'
      }}>
        <TitleText>{title}</TitleText>
        {children}
    </div>
    
)

export default Section;