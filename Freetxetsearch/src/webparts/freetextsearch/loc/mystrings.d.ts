declare interface IFreetextsearchWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  People:string;
  SameSiteSearch:string;
  OtherSiteSearch:string;

  DefaultSearchResultsPageUrlFieldLabel:string;
  EnableCustomSearchPlaceholderLabel:string;
  CustomSearchLabel:string;
}

declare module 'FreetextsearchWebPartStrings' {
  const strings: IFreetextsearchWebPartStrings;
  export = strings;
}
