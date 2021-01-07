export class Config {
  collection:[{
    href: string;
    items: [{
      data:[{
        center:string;
        date_created:string;
        description:string;
        keywords:[];
        media_type:string;
        nasa_id:string;
        title:string;
      }]
      links:[{
        href:string;
        rel:string;
        render:string;
      }]
    }];
    links:[{
      href:string;
      promt:string;
      rel:string;
    }];
    metadata:{
      total_hits:number;
    };
  }]
}
