interface Bookmark {
  accession: string;
  virus: string;
  host: string;
}

class BookmarksHandler {
  private accessions: Array<Bookmark> = [];
  
  private saveAccessions(): void {
    localStorage.setItem("accessions", JSON.stringify(this.accessions));
  }
  public setAccessions(payload: Array<Bookmark>) {
    this.accessions = JSON.parse(localStorage.getItem("accessions"));
  }
  public getAccessions(): Array<Bookmark> {
    return this.accessions
  }
  public getBookmark(accession: string): Bookmark {
    return this.accessions.find(
      (bookmark: Bookmark) => bookmark.accession === accession
    ) ?? null;
  }
  public setBookmark(payload: Bookmark): void {
    this.accessions.push(payload);
    this.saveAccessions();
  }
  public removeBookmark(accession: string): void {
    this.accessions = this.accessions.filter(
      (bookmark: Bookmark) => bookmark.accession !== accession
    );
    this.saveAccessions();
  }
}

const bookmarks = new BookmarksHandler();
export default bookmarks;
