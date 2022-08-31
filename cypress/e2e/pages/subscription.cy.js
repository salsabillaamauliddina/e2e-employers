export class SubscriptionPage {
  previewButton =".sc-bZkfAO.bxJEZL";
  editViewPage = '.sc-bZkfAO cWBUiz';


  clickPreview () {
    cy.get(this.previewButton).find().click();
  }

  clickEditView () {
    cy.get(this.editViewPage).click();
  }
};