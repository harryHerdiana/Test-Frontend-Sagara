export async function getAllNews() {
  const url =
    "https://newsapi.org/v2/top-headlines?" +
    "country=id&" +
    "apiKey=215f31f37f7241ddb73b32023444699e";
    const response = await fetch(url)
    const data = await response.json()

    return data.articles
}
