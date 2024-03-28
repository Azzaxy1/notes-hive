// import React from "react";
// import { getArchivedNotes } from "../utils/local-data";
// import NotesItems from "../components/NotesItems";

// const ArchivePages = ({ notes, onDelete, onArchive }) => {
//   const archivedNotes = getArchivedNotes();
//   console.log(archivedNotes);

//   return (
//     <main>
//       <section>
//         <div className="px-4 my-3 w-full md:w-[50%] rounded-lg pb-7 bg-primary">
//           <h1 className="pb-3 text-center">Archive</h1>
//           {archivedNotes.length ? (
//             archivedNotes.map((note) => {
//               return (
//                 <NotesItems
//                   key={note.id}
//                   onDelete={onDelete}
//                   onArchive={onArchive}
//                   {...note}
//                 />
//               );
//             })
//           ) : (
//             <p className="text-center">No archived records</p>
//           )}
//         </div>
//       </section>
//     </main>
//   );
// };

// export default ArchivePages;
