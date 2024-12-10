export default function Statistique(props){
    const statistique = [
      {
        "number": 7,
        "description" : "Years Experience"
      }
      ,
      {
        "number": "+125",
        "description" : "Clients Worldwide"
      }, 
      {
        "number": "+210",
        "description" : "Projects"
      }
    ]
    return <div className="cardBox9 backgroundPers rounded-lg p-6 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      {
        statistique.map((item,index) => {
          return <div key={index}>
            <p className="text-2xl font-bold">{item.number}</p>
            <p className="text-gray-400">{item.description}</p>
          </div>
        })
      }
    </div>
  }