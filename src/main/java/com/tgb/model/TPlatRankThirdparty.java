package com.tgb.model;

public class TPlatRankThirdparty {
    private Integer id;

    private String name_third;
    private String name;

    private String question;

    private String author;

    private String url;


    public String getName() {

        return name;
    }

    public void setName(String name) {
        setName_third(name);
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName_third() {
        name_third   =  name  ;
        return name_third;
    }

    public void setName_third(String name_third) {

        this.name_third = name_third;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question == null ? null : question.trim();
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author == null ? null : author.trim();
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url == null ? null : url.trim();
    }
}