export class FizzBuzzService {
  fetchSingle(number: string): Promise<string> {
    return fetch(`/single/${number}`)
      .then(response => response.text());
  }

  fetchRange(inclusiveEnd: string): Promise<string[]> {
    return fetch(`/range/${inclusiveEnd}`)
      .then(response => response.json());
  }
}
