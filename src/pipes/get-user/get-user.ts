
import { Pipe, PipeTransform } from '@angular/core';
import { MediaProvider } from '../../providers/media/media';
import { Media } from '../../interfaces/interface';

/**
 * Generated class for the GetTagByUserPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'getUser',
})
export class GetUserPipe implements PipeTransform {
  constructor(public mediaProvider: MediaProvider) {

  }

  async transform(tag: string) {
    return new Promise((resolve, reject) => {
      this.mediaProvider.getFilesByTag(tag).subscribe((responses: Media[]) => {
        let result = null;
        responses.forEach((response: Media) => {
          if (response && response.user_id === this.mediaProvider.user.user_id) {
            result = response.file_id;
          }
        });
        resolve(result);
      });
    });
  }
}

