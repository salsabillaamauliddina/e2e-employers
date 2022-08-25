export class SubscriptionPage {
  previewButton ='button.sc-bZkfAO bxJEZL';
  editViewPage = '.sc-bZkfAO cWBUiz';


  clickPreview () {
    cy.get(this.previewButton).click();
  }

  clickEditView () {
    cy.get(this.editViewPage).click();
  }
};