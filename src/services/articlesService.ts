import { Article } from "@/models/article";

export const getImage = (articleItem:Article): string => {
    if (articleItem.image && ! articleItem.image.includes("https://") && ! articleItem.image.includes("data:image/")){
        return getUrl() + "/img/articleImages/" + articleItem.image

      } else if (articleItem.image && (articleItem.image.includes("https://") || articleItem.image.includes("data:image/"))) {
       return articleItem.image
      }
    return articleItem.image
}

 
export const filterLanguageParsingDate = (articleList: Article[], language:string):Article[] => {
    const fitered =  articleList.filter((item)=>item.language === language)
    return fitered.map(item => {
      item.dateParsed = new Date(item.date)
      return item}
      )
}

export const getUrl = () => {
    return window.location.origin
  }