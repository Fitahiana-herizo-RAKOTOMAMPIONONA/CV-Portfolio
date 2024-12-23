import { useParams } from "react-router-dom";
import {
  AutoSlideCarousel,
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
      console.error("Failed to fetch data:", error);
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
      console.error("Failed to fetch comments:", error);
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
        className="text-4xl font-bold text-gray-800 mb-8 tracking-tight"
      />

      <div className="mt-8 rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
        <img
          src={
            loading
              ? "/assets/image/loading.png"
              : data?.file_url?.startsWith("/uploads")
              ? `${url}${data?.file_url}`
              : data?.file_url || "/assets/image/default.png"
          }
          alt="Aperçu du projet"
          className="w-full max-h-[500px] object-cover object-center"
        />
      </div>

      <div className="mt-12 rounded-2xl backgroundPers p-8 shadow-xl">
        <div className="lg:grid lg:grid-cols-2 gap-8">
          <div>
            <Titre2
              title="Description"
              className="text-xl font-semibold text-blue-600 mb-4 uppercase"
            />
            <p className="text-gray-400">{data?.description_work || "Description non disponible"}</p>
          </div>
          <div>
            <Titre2
              title="Technologies utilisées"
              className="text-xl font-semibold text-blue-600 mb-4 uppercase"
            />
            <div className="flex gap-3 flex-wrap">
              {data?.technologies_used?.length > 0 ? (
                data.technologies_used.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-indigo-600 transition-colors"
                  >
                    #{tech}
                  </div>
                ))
              ) : (
                <p className="text-gray-500">Aucune technologie spécifiée</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <AutoSlideCarousel imageUrls={data?.slide_image_urls || []} />

      <div className="mt-12 rounded-2xl backgroundPers p-10 shadow-xl">
        <div className="lg:grid lg:grid-cols-3 gap-8">
          <div>
            <ComposantWork title="Année" value={data?.date || "Non spécifiée"} />
            <ComposantWork
              title="Client"
              value={data?.client_name || "Non spécifié"}
            />
            <ComposantWork title="Service" value={data?.type || "Non spécifié"} />
            <ComposantWork title="Progrès" value={`${data?.progress || 0}%`} />
          </div>
          <div className="col-span-2">
            <div className="uppercase text-2xl text-orange-500 font-semibold mb-6">
              À propos
            </div>
            <p className="text-gray-400">{data?.remarks || "Pas d'informations supplémentaires"}</p>
          </div>
        </div>
      </div>

      {/* Lien GitHub */}
      {data?.github_link && (
        <div className="mt-8">
          <a
            href={data?.github_link}
            className="bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-700 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-indigo-600 hover:to-blue-800 transition-all flex items-center gap-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Voir sur GitHub</span>
          </a>
        </div>
      )}

      {/* Lien version en direct */}
      {data?.live_version && (
        <div className="mt-8">
          <a
            href={data?.live_version}
            className="bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-700 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-indigo-600 hover:to-blue-800 transition-all flex items-center gap-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Voir la version en direct</span>
          </a>
        </div>
      )}

      <div className="backgroundPers rounded-2xl p-8 lg:p-12 mt-12 shadow-xl">
        <div className="lg:grid lg:grid-cols-2 gap-8">
          <div>
            <Titre2 title="Commentaires" className="pb-5 text-blue-600 text-lg font-semibold uppercase" />
            <input
              type="text"
              className="w-full p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-indigo-500 mb-6"
              placeholder="Votre nom"
            />
            <input
              type="email"
              className="w-full p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-indigo-500 mb-6"
              placeholder="exemple@gmail.com"
            />
            <textarea
              className="w-full p-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-indigo-500 h-[150px] mb-6"
              placeholder="Votre commentaire..."
            ></textarea>
            <button
              type="button"
              className="w-full p-4 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-colors flex justify-center items-center gap-4"
            >
              <BsSendArrowUp className="font-bold text-lg" />
              <span>Envoyer</span>
            </button>
          </div>
          <div className="overflow-y-auto max-h-[400px]">
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
              <p className="text-center text-gray-500">Soyez le premier à commenter</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
