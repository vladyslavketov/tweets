import { ITEMS_PER_PAGE } from "../constans";

export default function getCurrentItemsPerPage(arrayOfData, currentPage = 1) {
  if (!Array.isArray(arrayOfData)) return [];
  const perPage = ITEMS_PER_PAGE;

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const itemsPerPage = arrayOfData.slice(start, end);

  return itemsPerPage;
}