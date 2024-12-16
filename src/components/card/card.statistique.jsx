export default function Statistique(props){
    const statistique = [
      {
        "number": 2,
        "description" : "Ans d'experience"
      }
      ,
      {
        "number": "+12",
        "description" : "Clients"
      }, 
      {
        "number": "+23",
        "description" : "Projets"
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