export interface IFlashCardRepository {
  createFlashCard(): void
  getFlashCards(): void
  getFlashCardById(): void
  updateFlashCard(): void
  deleteFlashCard(): void
}
