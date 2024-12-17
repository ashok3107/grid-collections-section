// const gridsData = require('../data/collections.json');
// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.

const insertGrids = () => {
  const gridsData = [
    {
      "collection_id": "cozy",
      "name": "Cozy Comfort",
      "description": "Plush fabrics and soothing designs",
      "image_url": "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/collections/cozy-comfort.jpg",
      "created_at": "2024-01-01"
    },
    {
      "collection_id": "urban",
      "name": "Urban Oasis",
      "description": "For the city dwellers",
      "image_url": "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/collections/urban-oasis.jpg",
      "created_at": "2024-01-01"
    },
    {
      "collection_id": "fresh",
      "name": "Fresh Fusion",
      "description": "Contemporary styles and patterns",
      "image_url": "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/collections/fresh-fusion.jpg",
      "created_at": "2024-01-01"
    }
  ];
  gridsData.forEach((grid, index) => {
    const currentGrid = document.getElementById('grid'+(index + 1));
    const backgroundDiv = document.createElement("div");
    backgroundDiv.className = "absolute";
    backgroundDiv.style.backgroundImage = "url("+grid.image_url+")";
    currentGrid.appendChild(backgroundDiv);
    const gridNameElement = document.createElement("div");
    gridNameElement.innerText = grid.name;
    gridNameElement.className = "gridName";
    const gridDescElement = document.createElement("div");
    gridDescElement.innerText = grid.description;
    gridDescElement.className = "gridDesc";
    currentGrid.appendChild(gridNameElement);
    currentGrid.appendChild(gridDescElement);
  })
}
