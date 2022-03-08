interface Bookmark {
  virus: string;
  host: string;
  virus_id: string;
  host_id: string;
  type: "virus" | "host"
}

class BookmarksHandler {
  private accessions: Array<Bookmark> = [];

  private saveAccessions(): void {
    localStorage.setItem("accessions", JSON.stringify(this.accessions));
  }
  public setAccessions() {
    const localAcessions = JSON.parse(localStorage.getItem("accessions"));
    localAcessions ? this.accessions = localAcessions : this.accessions = []
    
  }
  public getAccessions(): Array<Bookmark> {
    return this.accessions;
  }
  public getBookmark(accession: string): Bookmark {
    return this.accessions.find(
      (bookmark: Bookmark) => bookmark.virus_id === accession
    );
  }
  public setBookmark(payload: Bookmark): void {
    this.accessions.push(payload);
    this.saveAccessions();
  }
  public removeBookmark(accession: string): void {
    this.accessions = this.accessions.filter(
      (bookmark: Bookmark) => bookmark.virus_id !== accession
    );
    this.saveAccessions();
  }
}

const bookmarks = new BookmarksHandler();
export default bookmarks;
