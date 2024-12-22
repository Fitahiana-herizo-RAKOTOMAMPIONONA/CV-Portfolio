// import { useParams } from "react-router-dom"
// import { CommentCard, ComposantWork, Navigation, Titre, Titre2 } from "../../components/components.export";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { slideINtop } from "../../animation/animation";
// import { BsSendArrowUp } from "react-icons/bs";
// import { WorkData } from "../../data/work.secure.data";

// export default function WorkDetail() {
//     const url = import.meta.env.VITE_API_URL
//     const { id_work } = useParams();
//     const [data, setData] = useState()
//     const [comment, setComment] = useState([])

//     const [error, setError] = useState(data == undefined)

//     const [load, setLoad] = useState(false)

//     const fetchdata = async () => {
//         try {
//             const url = import.meta.env.VITE_API_URL + "/work/find/" + id_work
//             const result = await axios.get(url)
//             console.log();
//             if (result.data.result && result.status == 200) {
//                 setData(result.data.result)
//                 setLoad(true)
//             }
//         }
//         catch (error) {
//             console.log(error);
//             setData(WorkData[id_work])
//         }

//     }

//     const constFetchComment = async () => {
//         const url = import.meta.env.VITE_API_URL + "/comment/all"
//         try {
//             const result = await axios.get(url)
//             console.log();
//             if (result.data.result && result.status == 200) {
//                 setComment(result.data.result)
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     useEffect(() => {
//         setError(data == undefined)
//     }, [data])

//     useEffect(() => {
//         fetchdata()
//         constFetchComment()
//         slideINtop(".cardG")
//     }, [])

//     return (
//         <div className="cardG">
//             <Navigation
//                 nav1="work"
//                 nav2={load ? "Chargement..." : data?.title_work || "Titre inconnu"}
//             />
//             <Titre
//                 title={load ? "Chargement..." : data?.title_work || "Titre inconnu"}
//                 className="text-2xl lg:text-3xl"
//             />
//             <div>
//                 <img src={load ? `${url}${data.file_url}` : (!error ? data.file_url : null)} alt="" className="w-full max-h-[400px] object-cover object-top" />
//             </div>
//             <div className="rounded-xl sm:rounded-3xl grid lg:grid-cols-2 bg-transparent backgroundPers relative overflow-hidden mt-10 p-4 lg:p-10">
//                 <img src="/assets/image/icon2.png" alt="Icone" className="absolute top-[-15px] right-14" />
//                 <div className="p-4 sm:backgroundPers mt-4 sm:mt-0">
//                     <Titre2
//                         title={data?.title_work || "Titre inconnu"}
//                         className="pt-4 pb-2 text-blue-600 uppercase"
//                     />
//                     <div className="pt-2 pb-2">
//                         {data?.description_work || "Description non disponible"}
//                     </div>
//                 </div>
//                 <div className="p-4 sm:backgroundPers mt-4 sm:mt-0">
//                     <Titre2 title="Description" className="pt-4 pb-2 text-blue-600 uppercase" />
//                     <div className="pt-2 pb-2">
//                         {data?.description_work || "Description non disponible"}
//                     </div>
//                     <div className="flex gap-2 flex-wrap">
//                         {data?.technologies_used?.length > 0 ?
//                             data.technologies_used.map((tech, index) => (
//                                 <div key={index} className="bg-blue-800 p-1 pl-3 pr-3 rounded-xl text-xs lg:text-sm">
//                                     #{tech}
//                                 </div>
//                             )) : "Aucune technologie spécifiée"}
//                     </div>
//                 </div>
//             </div>
//             <div className="backgroundPers rounded-2xl lg:p-10 grid grid-cols-1 lg:grid-cols-3 mt-10">
//                 <div className="backgroundPers rounded-2xl p-3 w-full relative overflow-hidden">
//                     <img src="/assets/image/icon2.png" alt="Icone" className="absolute top-[-15px] right-5" />
//                     <ComposantWork title="Année" value={data?.date || "Non spécifiée"} />
//                     <ComposantWork title="Client" value={data?.client_name || "Non spécifié"} />
//                     <ComposantWork title="Service" value={data?.type || "Non spécifié"} />
//                     <ComposantWork title="Progrès" value={`${data?.progress || 0}%`} />
//                 </div>
//                 <div className="p-6 col-span-2">
//                     <div className="uppercase text-2xl lg:text-3xl pb-5 text-orange-600 font-semibold">
//                         À propos
//                     </div>
//                     {data?.remarks || "Pas d'informations supplémentaires"}
//                 </div>
//             </div>
//             <div className="backgroundPers rounded-2xl p-6 lg:p-10 mt-10 grid lg:grid-cols-2 gap-7">
//                 <div>
//                     <div className="uppercase text-2xl lg:text-3xl pb-5 text-blue-600 font-semibold">
//                         Commentaires
//                     </div>
//                     <input type="text" className="w-full p-3 rounded-lg mt-2 mb-2" placeholder="Votre nom" />
//                     <input type="email" className="w-full p-3 rounded-lg mt-2 mb-2" placeholder="exemple@gmail.com" />
//                     <textarea className="w-full mt-2 mb-2 p-3 h-[150px] rounded-lg" placeholder="Message..."></textarea>
//                     <button type="button" className="w-full p-3 flex justify-center gap-5 border-red-50">
//                         <BsSendArrowUp className="font-bold text-lg" />
//                         <div className="capitalize">Envoyer</div>
//                     </button>
//                 </div>
//                 <div className="h-[400px] overflow-y-auto relative">
//                     {comment.length > 0 ?
//                         comment.map((item, index) => (
//                             <CommentCard key={index} name={item.username} comment={item.content_comment} email={item.email_user} />
//                         )) : (
//                             <div className="m-auto text-center font-semibold text-gray-500">
//                                 Soyez le premier à commenter
//                             </div>
//                         )
//                     }
//                 </div>
//             </div>
//         </div>
//     );
// }

import { useParams } from "react-router-dom";
import {
  CommentCard,
  ComposantWork,
  Navigation,
  Titre,
  Titre2,
} from "../../components/components.export";
import { useEffect, useState } from "react";
import axios from "axios";
import { slideINtop } from "../../animation/animation";
import { BsSendArrowUp } from "react-icons/bs";
import { WorkData } from "../../data/work.secure.data";

export default function WorkDetail() {
  const url = import.meta.env.VITE_API_URL;
  const { id_work } = useParams();
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const result = await axios.get(`${url}/work/find/${id_work}`);
      if (result.status === 200 && result.data.result) {
        setData(result.data.result);
      } else {
        setData(WorkData[id_work]);
      }
    } catch (error) {
      console.error(error);
      setData(WorkData[id_work]);
    } finally {
      setLoading(false);
    }
  };

  const fetchComments = async () => {
    try {
      const result = await axios.get(`${url}/comment/all`);
      if (result.status === 200 && result.data.result) {
        setComments(result.data.result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchComments();
    slideINtop(".cardG");
  }, []);

  return (
    <div className="cardG">
      <Navigation
        nav1="work"
        nav2={loading ? "Chargement..." : data?.title_work || "Titre inconnu"}
      />

      <Titre
        title={loading ? "Chargement..." : data?.title_work || "Titre inconnu"}
        className="text-2xl lg:text-3xl"
      />
      <div>
        <img
          src={
            loading
              ? "/assets/image/loading.png"
              : data?.file_url?.startsWith("/uploads")
              ? `${url}${data?.file_url}`
              : data?.file_url || "/assets/image/default.png"
          }
          alt="Aperçu du projet"
          className="w-full max-h-[400px] object-cover object-top"
        />
      </div>

      <div className="rounded-xl grid lg:grid-cols-2 bg-transparent backgroundPers mt-10 p-4 lg:p-10">
        <div>
          <Titre2
            title="Description"
            className="pt-4 pb-2 text-blue-600 uppercase"
          />
          <p>{data?.description_work || "Description non disponible"}</p>
        </div>
        <div>
          <Titre2
            title="Technologies utilisées"
            className="pt-4 pb-2 text-blue-600 uppercase"
          />
          <div className="flex gap-2 flex-wrap">
            {data?.technologies_used?.length > 0 ? (
              data.technologies_used.map((tech, index) => (
                <div
                  key={index}
                  className="bg-blue-800 p-1 pl-3 pr-3 rounded-xl text-xs lg:text-sm"
                >
                  #{tech}
                </div>
              ))
            ) : (
              <p>Aucune technologie spécifiée</p>
            )}
          </div>
        </div>
      </div>

      <div className="backgroundPers rounded-2xl lg:p-10 grid grid-cols-1 lg:grid-cols-3 mt-10">
        <div className="backgroundPers rounded-2xl p-3">
          <ComposantWork title="Année" value={data?.date || "Non spécifiée"} />
          <ComposantWork
            title="Client"
            value={data?.client_name || "Non spécifié"}
          />
          <ComposantWork title="Service" value={data?.type || "Non spécifié"} />
          <ComposantWork title="Progrès" value={`${data?.progress || 0}%`} />
        </div>
        <div className="p-6 col-span-2">
          <div className="uppercase text-2xl lg:text-3xl pb-5 text-orange-600 font-semibold">
            À propos
          </div>
          <p>{data?.remarks || "Pas d'informations supplémentaires"}</p>
        </div>
      </div>

      <div className="backgroundPers rounded-2xl p-6 lg:p-10 mt-10 grid lg:grid-cols-2 gap-7">
        <div>
          <Titre2 title="Commentaires" className="pb-5 text-blue-600" />
          <input
            type="text"
            className="w-full p-3 rounded-lg mt-2 mb-2"
            placeholder="Votre nom"
          />
          <input
            type="email"
            className="w-full p-3 rounded-lg mt-2 mb-2"
            placeholder="exemple@gmail.com"
          />
          <textarea
            className="w-full p-3 rounded-lg h-[150px] mt-2 mb-2"
            placeholder="Votre commentaire..."
          ></textarea>
          <button
            type="button"
            className="w-full p-3 flex justify-center gap-5 bg-blue-600 text-white"
          >
            <BsSendArrowUp className="font-bold text-lg" />
            <span>Envoyer</span>
          </button>
        </div>
        <div className="h-[400px] overflow-y-auto">
          {comments.length > 0 ? (
            comments.map((item, index) => (
              <CommentCard
                key={index}
                name={item.username}
                comment={item.content_comment}
                email={item.email_user}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">
              Soyez le premier à commenter
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
