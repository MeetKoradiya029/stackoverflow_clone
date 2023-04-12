import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, mergeMap, throwError } from 'rxjs';
import { Question } from '../Modals/question';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //#region 
  baseUrl = environment.baseUrl;
  postQuestion = environment.addQuestion;
  getAllQuestionsUrl = environment.getAllQuestions
  //#endregion

  constructor(private http: HttpClient) { }

  getAllQuestions(): Observable<Question> {
    return this.http.get<Question>(this.baseUrl+this.getAllQuestionsUrl);
  }

  getQuestionById(id: number): Observable<Question> {
    return this.http.get<Question>(`${this.baseUrl}/questions/${id}`);
  }

  addQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(this.baseUrl+this.postQuestion, question);
  }

  updateQuestion(question: Question): Observable<Question> {
    return this.http.put<Question>(`${this.baseUrl}/questions`, question);
  }

  deleteQuestion(id: number): Observable<Question> {
    return this.http.delete<Question>(`${this.baseUrl}/questions/${id}`);
  }

  post_Answer(queId: number,data:any){
    try {
          return this.http.get(this.baseUrl+this.getAllQuestionsUrl+"/"+queId).pipe(
            mergeMap((customer: any) => {
              const currentItemArray = customer.answers;
              currentItemArray.push(data);
    
              return this.http.patch(this.baseUrl+this.getAllQuestionsUrl+"/"+queId, {
                answers: currentItemArray
              });
            })
          );
    } catch (error:any) {
      return throwError(() => new Error(error))
    }

  }

}
