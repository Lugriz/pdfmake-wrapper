import { StyleDefinition } from './style-definition';
import { IImg } from '../interfaces/interfaces';

/**
 * Class to create an image definition
 */

export class Img extends StyleDefinition<Img, IImg> {

    /**
     * @param url Image URL or BASE64
     * @param fromDefinition It defines if the image is from definition "images" property
     */
    
    constructor(
        private url: string,
        private fromDefinition: boolean = false
    ) {
        super();
    }

    /**
     * It gets the content with the image in base64
     */

    public async build(): Promise<IImg> {
        return await this.toBase64();
    }

    /**
     * It fits the image
     * @param fit {[ number, number ]} 
     */

    public fit(fit: [number, number]): Img {
        this.content.fit = fit;
        return this;
    }

    /**
     * It converts a image URL to Base64 and set the image
     */

    private async toBase64(): Promise<IImg> {
        if (/^data:image\/(jpeg|png|jpg);base64,/.test( this.url ) || this.fromDefinition) {

            this.content.image = this.url;

            return Promise.resolve( this.content as IImg );

        } else {

            try {
                this.content.image = await new Promise((resolve, reject) => {
        
                    let img = new Image();

                    img.crossOrigin = '*';
            
                    img.onloadend = () => {
                        let canvas = document.createElement('canvas') as HTMLCanvasElement;
                        let context = canvas.getContext('2d') as CanvasDrawImage;
            
                        canvas.width = img.width;
                        canvas.height = img.height;
                        
                        context.drawImage(img, 0, 0);
            
                        resolve( canvas.toDataURL("image/jpeg") );
                    };
            
                    img.onerror = reject;
            
                    img.src = this.url;
        
                });

                return Promise.resolve( this.content as IImg );
            
            } catch(e) {
                throw new Error(`The ${ this.url } can't be resolved`);
            }

        }
        
    }
}