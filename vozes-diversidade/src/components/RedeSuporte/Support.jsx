import './Support.css'
import { supportTypes } from '../../data/SupportTypes' 

const Support = () => {
    const handleClick = (support) => {
      if(support.type === 'external'){
        window.open(support.url, '_blank', 'noopener, noreferrer')
      }else{
       alert(`Funcionalidade "${support.title}" será implementada em breve.`);
      }
    }
  return (
    <section id='support' className='support-network'>
      <div className="support-container">
        <h2>Rede de Apoio Multidisciplinar</h2>

        <div className="support-cards">
           {supportTypes.map((support, index) => {
                const IconComponent = support.Icon;
                return (
                    <div className="support-card" key={index}>
                        <div className="support-icon">
                            <IconComponent size={36} />
                        </div>
                        <h3>{support.title}</h3>
                        <p>{support.description}</p>
                        <button onClick={() => handleClick(support)}>{support.buttonText}</button>
                    </div>
                );
            })}
        </div>
      </div>
    </section>
  )
}

export default Support
